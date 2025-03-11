import loader from './motion-blur-2.svg'

const loaderImg = `<img src="${loader}" class="loader" alt="loader" />`;

let resNode, ask;
let delay = 200;
const shake = 'hello';
const wBody = 'data:application/javascript;base64,' +
    btoa(`
      self.addEventListener('message', (e) => {
          if(e.data === '${shake}') {
            self.postMessage('${shake}');
          }
          debugger;
          self.postMessage('no');
      });`
    );
const bw = () => {
  return new Promise((resolve)=>{
      const worker = new Worker(wBody);
      let full = false;
      const save = (flag) => {
        if (full) return;
        full = true;
        worker.terminate();
        resolve(flag);
      };
      worker.addEventListener('message',(e) => {
        if (e.data === shake) {
          setTimeout(() => {
            save(true);
          }, 1);
        }
        else save(false);
      });
      worker.postMessage(shake);
  });
};

async function isDevToolsOpen() {
    const clist = document.body.classList;
    if (resNode) resNode.innerHTML = loaderImg;

    const before = new Date().getTime() + delay;
    await bw();
    const flag = new Date().getTime() - before > 0;
    if (!ask && resNode) resNode.innerHTML = flag ? 'yes' : 'no';
    if (flag) clist.add('devtools');
    else clist.remove('devtools');
    ask = false;
    return flag;
}

export async function chkDevTools(element, warn) {
  resNode = element;
  window.addEventListener('focus', isDevToolsOpen);
  window.addEventListener('blur', function (e) {
    resNode.innerHTML = '';
    ask = true;
    return Promise.resolve().then(() => {
        window.confirm('Page paused, please confirm to continue');
        location.hash = '#pause';
        location.reload(location);
    });
  });
  isDevToolsOpen();
}