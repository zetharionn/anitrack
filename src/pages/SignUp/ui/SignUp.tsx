import { SignUpForm } from '@widgets/SignUpForm'
import { FC } from 'react'

const SignUp: FC = () => {
	return (
		<div className='mt-32'>
			<div className='flex flex-col mx-auto mb-2 max-w-xs'>
				<h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold'>
					Sign Up
				</h1>
				<p className='font-thin'>Enter your email and password</p>
			</div>
			<SignUpForm />
		</div>
	)
}

export default SignUp
