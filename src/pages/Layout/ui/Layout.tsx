import { Outlet } from 'react-router-dom'
import { Nav } from '@widgets/Nav'

const Layout = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	)
}

export default Layout
