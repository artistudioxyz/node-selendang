import './style.css'
import {setupCounter} from './counter'

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
		<img src="https://img.shields.io/github/last-commit/artistudioxyz/node-selendang" alt="Last Commit">
		<img src="https://img.shields.io/github/repo-size/artistudioxyz/node-selendang" alt="Repo Size">
		<img src="https://img.shields.io/github/package-json/v/artistudioxyz/node-selendang" alt="Version">
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
