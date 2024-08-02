import { nextui } from '@nextui-org/react'
import { lightTheme, darkTheme } from './src/app/ui/themes/index.ts'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	plugins: [
		nextui({
			defaultTheme: 'dark',
			themes: {
				light: lightTheme,
				dark: darkTheme
			}
		})
	]
}
