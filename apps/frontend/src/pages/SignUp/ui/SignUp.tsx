import { useAuthStore } from '@entities/user'
import { AuthForm, AuthFormTypes } from '@features/AuthForm'
import { ROUTES } from '@shared/lib'
import { Navigate } from 'react-router-dom'

const SignUp = () => {
	const isAuth = useAuthStore(state => state.isAuth)

	return (
		<div className='flex items-center justify-center h-[85vh]'>
			{isAuth && <Navigate to={ROUTES.HOME} />}
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
				<AuthForm AuthFormType={AuthFormTypes.SignUpForm} />
			</div>
		</div>
	)
}

export default SignUp
