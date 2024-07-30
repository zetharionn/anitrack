import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react'
import { Outlet } from 'react-router-dom'
import { ROUTES } from '@shared/lib/constants/routes'

export const Layout = () => {
	return (
		<>
			<Navbar>
				<NavbarBrand>
					<Link href='/' underline='hover'>
						<h1 className='font-bold'>AniTrack</h1>
					</Link>
				</NavbarBrand>
				<NavbarContent justify='end'>
					<NavbarItem>
						<Button as={Link} href={ROUTES.REGISTRATION} variant='bordered'>
							Sign up
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} href={ROUTES.LOGIN} variant='light'>
							Sign in
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<div>
				<Outlet />
			</div>
			<Navbar>
				<NavbarBrand>
					<p>© 2024 AniTrack. All rights reserved.</p>
				</NavbarBrand>
				<NavbarContent justify='end'>
					<NavbarItem>
						<Link
							href='https://github.com/zetharionn/AniTrack'
							target='_blank'
							underline='hover'
						>
							Source Code
						</Link>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</>
	)
}
