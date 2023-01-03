import typescript from '@rollup/plugin-typescript';

export default {
	input: "src/main.ts",
	output: [
		{
			file: "dist/bundle.cjs.js",
			format: 'cjs',
		},
		{
			file: "dist/bundle.es.js",
			format: 'es',
		},
		{
			name: "Selendang",
			file: "dist/bundle.umd.js",
			format: 'umd',
		},
	],
	plugins: [typescript()]
}
