import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from '@pages/index'

export const App = () => {
	return (
		<BrowserRouter>
			<SpeedInsights />
			<Routing />
			<Analytics />
		</BrowserRouter>
	)
}
