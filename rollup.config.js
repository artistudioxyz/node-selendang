import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';

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
	plugins: [
		typescript(),
		scss({
			output: `dist/bundle.min.css`,
			sourceMap: true,
			outputStyle: 'compressed'
		})
	]
}
