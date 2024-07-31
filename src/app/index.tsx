import { NextUIProvider } from '@nextui-org/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Routing } from './ui/routing'
import './ui/styles/index.scss'

export const App = () => {
	return (
		<NextUIProvider>
			<SpeedInsights />
			<Routing />
			<Analytics />
		</NextUIProvider>
	)
}
