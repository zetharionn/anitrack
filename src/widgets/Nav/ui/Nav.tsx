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
				<Link href={ROUTES.HOME} underline='hover'>
					<h1 className='font-bold text-lg'>AniTrack</h1>
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
