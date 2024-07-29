import { ComponentType, Suspense } from 'react'
import Loading from '@pages/Loading'

export const WithSuspense = <T extends object>(Component: ComponentType<T>) => {
	const Loader = (props: T) => {
		return (
			<Suspense fallback={<Loading />}>
				<Component {...props} />
			</Suspense>
		)
	}

	return Loader
}
