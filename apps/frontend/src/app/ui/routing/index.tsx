import { NextUIProvider } from '@nextui-org/react'
import { Route, Routes, useNavigate } from 'react-router-dom'

export const Routing = () => {
	const navigate = useNavigate()

	return (
		<NextUIProvider navigate={navigate}>
			<Routes>
				<Route />
			</Routes>
		</NextUIProvider>
	)
}
