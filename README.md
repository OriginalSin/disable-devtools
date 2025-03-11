# disable-devtools

> Detect if DevTools is open

## Idea

The repository [sindresorhus](https://github.com/sindresorhus/devtools-detect) gave me the idea to dig into DevTools. How else can you find out if a devtools is open? What if we use a "debugger" in the worker - it should work there too, right?

## [Demo](https://originalsin.github.io/disableDevtools/index.html)

## Install

```sh
npm install
npm run dev
```

## Usage worker

```jsx
const shake = 'hello';
self.addEventListener('message', (e) => {
    if(e.data === '${shake}') {
        self.postMessage('${shake}');
    }
    debugger;
    self.postMessage('no');
});
```

## Support

- Chrome DevTools
- Safari DevTools ?
- Firefox DevTools
- Opera DevTools ?

## Caveats

Write a [issues](https://github.com/OriginalSin/disable-devtools/issues) or [pulls](https://github.com/OriginalSin/disable-devtools/pulls) if you notice any bugs or if something needs to be fixed.
