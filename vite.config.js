import { defineConfig } from 'vite'
export default defineConfig({
	build: {
		rollupOptions: {
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
			]
		}
	}
})
