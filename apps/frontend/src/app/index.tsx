import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BrowserRouter } from 'react-router-dom'
import { Routing } from './ui/routing'
import './ui/styles/index.scss'

export const App = () => {
	return (
		<BrowserRouter>
			<SpeedInsights />
			<Routing />
			<Analytics />
		</BrowserRouter>
	)
}

export default App
