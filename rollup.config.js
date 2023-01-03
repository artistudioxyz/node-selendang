import typescript from '@rollup/plugin-typescript';

export default {
	input: "src/main.ts",
	output: [
		{
			format: 'cjs',
			entryFileNames: "[name].bundle.[format].js",
		},
		{
			format: 'es',
			entryFileNames: "[name].bundle.[format].js",
		},
		{
			format: 'umd',
			entryFileNames: "[name].bundle.[format].js",
		},
	],
	plugins: [typescript()]
}
