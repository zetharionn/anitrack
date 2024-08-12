import { Button, Input } from '@nextui-org/react'

export const SignUpForm = () => {
	return (
		<div className='mx-auto flex flex-col max-w-xs'>
			<div className='flex flex-col gap-4'>
				<Input
					isRequired
					type='email'
					radius='md'
					variant='bordered'
					label='Email'
				/>
				<Input
					isRequired
					type='password'
					radius='md'
					variant='bordered'
					label='Password'
				/>
				<Button radius='sm'>Sign Up</Button>
			</div>
		</div>
	)
}
