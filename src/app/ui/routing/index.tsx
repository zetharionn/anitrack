import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@pages/Layout'
import Loading from '@pages/Loading'
import NotFound from '@pages/NotFound'
import { WithSuspense } from '@shared/lib'
import { ROUTES } from '@shared/lib'

const Home = WithSuspense(
	lazy(async () => import('@pages/Home')),
	Loading
)
const Registration = WithSuspense(
	lazy(async () => import('@pages/Registration')),
	Loading
)
const Login = WithSuspense(
	lazy(async () => import('@pages/Login')),
	Loading
)

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={ROUTES.HOME} element={<Home />} />
					<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
					<Route path={ROUTES.REGISTRATION} element={<Registration />} />
					<Route path={ROUTES.LOGIN} element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
