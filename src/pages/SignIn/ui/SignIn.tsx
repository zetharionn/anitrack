import { SignInForm } from '@widgets/SignInForm'
import { FC } from 'react'

const SignIn: FC = () => {
	return (
		<div className='mt-32'>
			<div className='flex flex-col mx-auto mb-2 max-w-xs'>
				<h1 className='lg:text-3xl md:text-2xl sm:text-xl font-bold'>
					Sign In
				</h1>
				<p className='font-thin'>Enter your email and password</p>
			</div>
			<SignInForm />
		</div>
	)
}

export default SignIn
