import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import biomePlugin from 'vite-plugin-biome'

export default defineConfig({
	plugins: [
		react(),
		biomePlugin({
			mode: 'check',
			files: './src/*.*',
			applyFixes: true,
			failOnError: false
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	},
	resolve: {
		alias: {
			'@app': path.resolve(__dirname, './src/app'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@features': path.resolve(__dirname, './src/features'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@shared': path.resolve(__dirname, './src/shared')
		}
	}
})
