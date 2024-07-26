import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Routing } from '@pages/index'

export const App = () => {
	return (
		<>
			<SpeedInsights />
			<Routing />
			<Analytics />
		</>
	)
}
