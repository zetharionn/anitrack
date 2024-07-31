import { ComponentType, Suspense } from 'react'

export const WithSuspense = <T extends object>(Component: ComponentType<T>) => {
	const Loader = (props: T) => {
		return (
			<Suspense>
				<Component {...props} />
			</Suspense>
		)
	}

	return Loader
}
