import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import Login from './Login'
import NotFound from './NotFound'
import Registration from './Registration'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index path='/' element={<Home />} />
					<Route path='/notfound' element={<NotFound />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
