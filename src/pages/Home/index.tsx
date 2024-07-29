import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react'
import { FC } from 'react'
import { ROUTES } from '@shared/lib/constants/routes'

const Home: FC = () => {
	return (
		<div className='flex flex-col h-screen'>
			<Navbar>
				<NavbarBrand>
					<p className='font-bold'>AniTrack</p>
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
			<div className='flex flex-col items-center justify-center gap-2 h-screen'>
				<h1 className='text-3xl font-extrabold'>Track your Anime Stats!</h1>
				<p>
					Stay on top of your anime viewing habits with AniTrack tracking
					features.
				</p>
				<Button color='primary' as={Link} href={ROUTES.REGISTRATION}>
					Start Tracking
				</Button>
			</div>
			<Navbar className='flex-row flex-wrap content-end '>
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
		</div>
	)
}

export default Home
