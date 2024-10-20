import { useAuthStore } from '@entities/user'
import { ROUTES } from '@shared/lib'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const ProtectedRoute = () => {
	const checkAuth = useAuthStore(state => state.checkAuth)
	const isAuth = useAuthStore(state => state.isAuth)
	const navigate = useNavigate()

	useEffect(() => {
		checkAuth()
		if (isAuth === false) {
			navigate(ROUTES.HOME)
		}
	}, [checkAuth, isAuth, navigate])

	return <Outlet />
}
