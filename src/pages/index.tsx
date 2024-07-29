import { lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ROUTES } from '@shared/lib/constants/routes'
import { WithSuspense } from '@shared/lib/hocs/WithSuspense'
import NotFound from './NotFound'

const Home = WithSuspense(lazy(async () => import('./Home')))
const Registration = WithSuspense(lazy(async () => import('./Registration')))
const Login = WithSuspense(lazy(async () => import('./Login')))

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
