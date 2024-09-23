import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Routing } from './ui/routing'
import { Analytics } from '@vercel/analytics/react'
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
