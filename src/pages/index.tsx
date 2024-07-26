import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '@shared/lib/constants/routes'
import { Home } from './Home'
import { NotFound } from './NotFound'

export const Routing = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
		</Routes>
	)
}
