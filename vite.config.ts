import path from 'path'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		react(),
		checker({
			typescript: true,
			eslint: {
				lintCommand: 'eslint ./src/**/*.{ts,tsx}'
			}
		})
	],
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
