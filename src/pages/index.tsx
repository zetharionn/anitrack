import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ROUTES } from '@shared/lib/constants/routes'
import { Home } from './Home'
import { Login } from './Login'
import { NotFound } from './NotFound'
import { Registration } from './Registration'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
				<Route path={ROUTES.REGISTRATION} element={<Registration />} />
				<Route path={ROUTES.LOGIN} element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
