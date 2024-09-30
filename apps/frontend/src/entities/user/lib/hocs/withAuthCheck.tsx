import { useAuthStore } from '@entities/user/model'
import { authService } from '@shared/api'
import { type ComponentType, useEffect } from 'react'

export const withAuthCheck = <T extends object>(
	Component: ComponentType<T>
) => {
	const WrappedComponent = (props: T) => {
		const signOut = useAuthStore(state => state.signOut)

		useEffect(() => {
			authService.getUser().then(res => {
				if (res.error) {
					signOut()
				}
			})
		}, [signOut])

		return <Component {...props} />
	}

	return WrappedComponent
}
