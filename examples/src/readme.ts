import { Selendang } from "../../src/main";

export default `
	<div id="container-readme">
		<a href="https://github.com/artistudioxyz/node-selendang" target="_blank" rel="noreferrer">
		  <img src="/logo.png" class="logo" alt="Selendang Logo" />
		</a>
		<h1>~ Node Selendang ~</h1>
		<div class="read-the-docs">
			<p>a simple reading process bar library</p>
			${ new Selendang('Agung') }
		</div>
	</div>
`
