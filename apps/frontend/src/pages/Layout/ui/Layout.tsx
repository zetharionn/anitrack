import { Outlet } from 'react-router-dom'
import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react'
import { ROUTES } from '@shared/lib'
import { useAuthStore } from '@entities/user'
import { Profile } from '@features/Profile'

const Layout = () => {
	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<>
			<Navbar>
				<NavbarBrand>
					<Link href={ROUTES.HOME}>
						<h1 className='md:text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#f5d63b] to-[#9739f0]'>
							AniTrack
						</h1>
					</Link>
				</NavbarBrand>
				<NavbarContent justify='end'>
					{isAuth ? (
						<NavbarItem>
							<Profile />
						</NavbarItem>
					) : (
						<>
							<NavbarItem>
								<Button as={Link} href={ROUTES.SIGN_UP} variant='bordered'>
									Sign up
								</Button>
							</NavbarItem>
							<NavbarItem>
								<Button as={Link} href={ROUTES.SIGN_IN} variant='light'>
									Sign in
								</Button>
							</NavbarItem>
						</>
					)}
				</NavbarContent>
			</Navbar>
			<Outlet />
		</>
	)
}

export default Layout
