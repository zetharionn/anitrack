import { Button, Link } from '@nextui-org/react'
import { FC } from 'react'
import { ROUTES } from '@shared/lib'

const Home: FC = () => {
	return (
		<div className='flex flex-col text-center items-center justify-center gap-4 h-[85vh]'>
			<h1 className='sm:text-3xl md:text-5xl lg:text-6xl font-extrabold'>
				<span>Track your Anime Stats on </span>
				<span className='text-transparent bg-clip-text bg-gradient-to-br from-[#f5d63b] to-[#9739f0]'>
					AniTrack
				</span>
				<span>!</span>
			</h1>
			<p className='md:text-xl lg:text-2xl'>
				Stay on top of your anime viewing habits with AniTrack tracking
				features.
			</p>
			<div className='flex flex-row gap-4'>
				<Button
					className='font-bold text-white'
					color='primary'
					variant='shadow'
					size='lg'
					as={Link}
					href={ROUTES.REGISTRATION}
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
