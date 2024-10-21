import { useAuthStore } from '@entities/user'
import { ROUTES } from '@shared/lib'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
	const checkAuth = useAuthStore(state => state.checkAuth)
	const isAuth = useAuthStore(state => state.isAuth)

	useEffect(() => {
		checkAuth()
	}, [checkAuth])

	return isAuth ? <Outlet /> : <Navigate to={ROUTES.HOME} />
}
