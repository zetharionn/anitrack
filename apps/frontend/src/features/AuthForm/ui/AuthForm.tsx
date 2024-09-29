import { Button, Input } from '@nextui-org/react'
import { type FC, memo } from 'react'
import { AuthFormTypes, useAuthForm } from '../lib'

export interface IAuthForm {
	AuthFormType: AuthFormTypes
}

export const AuthForm: FC<IAuthForm> = memo(({ AuthFormType }) => {
	const {
		onSubmit,
		formState: { errors },
		register
	} = useAuthForm(AuthFormType)

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
					{AuthFormType === AuthFormTypes.SignInForm ? 'Sign In' : 'Sign Up'}
				</Button>
			</form>
		</div>
	)
})
