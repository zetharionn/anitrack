import { useAuthForm, AuthFormTypes } from '@features/AuthForm'
import { Button, Input } from '@nextui-org/react'

export const SignUpForm = () => {
	const {
		onSubmit,
		register,
		formState: { errors }
	} = useAuthForm(AuthFormTypes.SignUpForm)

	return (
		<div className='flex flex-col gap-4'>
			<form className='flex flex-col gap-3' onSubmit={onSubmit}>
				<Input
					{...register('email')}
					isRequired
					type='email'
					variant='bordered'
					radius='sm'
					label='Email'
					isInvalid={!!errors.email}
					errorMessage={errors.email?.message}
				/>
				<Input
					{...register('password')}
					isRequired
					type='password'
					variant='bordered'
					radius='sm'
					label='Password'
					isInvalid={!!errors.password}
					errorMessage={errors.password?.message}
				/>
				<Button type='submit' radius='sm'>
					Sign Up
				</Button>
			</form>
		</div>
	)
}
