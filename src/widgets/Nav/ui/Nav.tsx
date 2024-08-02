import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

export const Nav = () => {
	return (
		<Navbar>
			<NavbarBrand>
				<Link href={ROUTES.HOME}>
					<h1 className='md:text-xl lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#f5d63b] to-[#9739f0]'>
						AniTrack
					</h1>
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
	)
}
