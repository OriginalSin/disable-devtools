import './style.css'
import viteLogo from './vite.svg'
import mtNsLogo from './mtNs.svg'

import { chkDevTools } from './counter.js'

const mtImg = `<img src="${mtNsLogo}" class="logo mtNs" alt="mtNs logo" />`;
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://moretele.ru/pkks/index.html" target="_blank">
      ${mtImg}
    </a>

    <h1>Is DevTools open?</h1>
      <h1 class="devtools-state"></h1>
    <p class="read-the-docs">
      Try it out by opening DevTools
    </p>
  </div>
`

chkDevTools(document.querySelector('.devtools-state'), mtImg)
