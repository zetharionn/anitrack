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
const SignUp = WithSuspense(
	lazy(async () => import('@pages/SignUp')),
	Loading
)
const SignIn = WithSuspense(
	lazy(async () => import('@pages/SignIn')),
	Loading
)

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={ROUTES.HOME} element={<Home />} />
					<Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
					<Route path={ROUTES.SIGN_UP} element={<SignUp />} />
					<Route path={ROUTES.SIGN_IN} element={<SignIn />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
