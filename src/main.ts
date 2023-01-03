import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://github.com/artistudioxyz/node-selendang" target="_blank" rel="noreferrer">
      <img src="/logo.png" class="logo" alt="Selendang Logo" />
    </a>
    <h1>~ Node Selendang ~</h1>
    <p class="read-the-docs">
      a simple reading process bar library
    </p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
