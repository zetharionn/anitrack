import { AuthFormTypes, useAuthForm } from '@features/AuthForm'
import { Button, Input } from '@nextui-org/react'

export const SignInForm = () => {
	const {
		onSubmit,
		register,
		formState: { errors }
	} = useAuthForm(AuthFormTypes.SignInForm)

	return (
		<div className='mx-auto flex flex-col max-w-xs'>
			<form className='flex flex-col gap-4' onSubmit={onSubmit}>
				<Input
					{...register('email')}
					isRequired
					type='email'
					radius='md'
					variant='bordered'
					label='Email'
					isInvalid={!!errors.email}
					errorMessage={errors.email?.message}
				/>
				<Input
					{...register('password')}
					isRequired
					type='password'
					radius='md'
					variant='bordered'
					label='Password'
					isInvalid={!!errors.password}
					errorMessage={errors.password?.message}
				/>
				<Button radius='sm'>Sign In</Button>
			</form>
		</div>
	)
}
