import { ComponentType, Suspense } from 'react'

export const WithSuspense = <T extends object>(
	Component: ComponentType<T>,
	LoaderComponent: ComponentType
) => {
	const Loader = (props: T) => {
		return (
			<Suspense fallback={<LoaderComponent />}>
				<Component {...props} />
			</Suspense>
		)
	}

	return Loader
}
