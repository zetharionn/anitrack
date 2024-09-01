import { useAuthStore } from '@entities/user'
import { SignInForm } from '@widgets/SignInForm'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '@shared/lib'

const SignIn: FC = () => {
	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<div className='flex items-center justify-center h-[85vh]'>
			{isAuth && <Navigate to={ROUTES.HOME} />}
			<div className='flex flex-col gap-4 lg:w-[20vw] md:w-[40vw] sm:w-[60vw]'>
				<div className='flex flex-col text-center'>
					<h1 className='md:text-3xl sm:text-2xl font-medium'>
						<span>Welcome back</span>
					</h1>
					<p className='font-thin md:text-xl sm:text-lg'>
						Enter your email and password
					</p>
				</div>
				<SignInForm />
			</div>
		</div>
	)
}

export default SignIn
