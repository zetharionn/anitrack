import { useAuthStore } from '@entities/user'
import { Button, Link } from '@nextui-org/react'
import { ROUTES } from '@shared/lib'

const Home = () => {
	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<div className='flex flex-col text-center items-center justify-center gap-4 h-[85vh]'>
			<div className='absolute z-[-1] w-[256px] h-[256px] rounded-full bg-gradient-to-b from-[#f5d63b] to-[#9739f0] blur-[96px]' />
			<h1 className='sm:text-3xl md:text-5xl lg:text-6xl font-extrabold'>
				<span>Watch and Track on </span>
				<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#f5d63b] to-[#9739f0]'>
					AniTrack
				</span>
			</h1>
			<p className='md:text-xl lg:text-2xl'>
				Watch your favorite anime and track watch time!
			</p>
			<div className='flex flex-row gap-4'>
				<Button
					className='font-bold text-white'
					color='primary'
					variant='shadow'
					size='lg'
					as={Link}
					href={isAuth ? ROUTES.CATALOG : ROUTES.SIGN_UP}
				>
					Start Tracking
				</Button>
				<Button
					variant='bordered'
					size='lg'
					as={Link}
					href='https://github.com/zetharionn/AniTrack'
					target='_blank'
				>
					Github
				</Button>
			</div>
		</div>
	)
}

export default Home
