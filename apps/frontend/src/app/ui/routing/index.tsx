import { NextUIProvider } from '@nextui-org/react'
import Layout from '@pages/Layout'
import Loading from '@pages/Loading'
import { ROUTES, withSuspense } from '@shared/lib'
import { lazy } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

const Home = withSuspense(
	lazy(async () => import('@pages/Home')),
	Loading
)

export const Routing = () => {
	const navigate = useNavigate()

	return (
		<NextUIProvider navigate={navigate}>
			<Routes>
				<Route element={<Layout />}>
					<Route path={ROUTES.HOME} element={<Home />} />
				</Route>
			</Routes>
		</NextUIProvider>
	)
}
