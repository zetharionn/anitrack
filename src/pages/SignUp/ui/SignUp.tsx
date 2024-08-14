import { SignUpForm } from '@widgets/SignUpForm'
import { FC } from 'react'

const SignUp: FC = () => {
	return (
		<div className='flex items-center justify-center h-[85vh]'>
			<div className='flex flex-col gap-4 lg:w-[20vw] md:w-[40vw] sm:w-[60vw]'>
				<div className='flex flex-col text-center'>
					<h1 className='md:text-3xl sm:text-2xl font-medium'>
						<span>Welcome to </span>
						<span className='font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#f5d63b] to-[#9739f0]'>
							AniTrack
						</span>
					</h1>
					<p className='font-thin md:text-xl sm:text-lg'>
						Check out your email after sign up
					</p>
				</div>
				<SignUpForm />
			</div>
		</div>
	)
}

export default SignUp
