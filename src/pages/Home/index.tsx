import { Button, Link } from '@nextui-org/react'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex flex-col items-center justify-center gap-2 h-[85vh]'>
				<h1 className='text-3xl font-extrabold'>Track your Anime Stats!</h1>
				<p>
					Stay on top of your anime viewing habits with AniTrack tracking
					features.
				</p>
				<Button color='primary' as={Link} href='./registration'>
					Start Tracking
				</Button>
			</div>
		</div>
	)
}

export default Home
