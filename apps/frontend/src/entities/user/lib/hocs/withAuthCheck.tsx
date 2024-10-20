import { type ComponentType, useEffect } from 'react'
import { useAuthStore } from '@entities/user'

export const withAuthCheck = <T extends object>(
	Component: ComponentType<T>
) => {
	const WrappedComponent = (props: T) => {
		const checkAuth = useAuthStore(state => state.checkAuth)

		useEffect(() => {
			checkAuth()
		}, [checkAuth])

		return <Component {...props} />
	}

	return WrappedComponent
}
