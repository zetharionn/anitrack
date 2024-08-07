import { Button, Divider, Input } from '@nextui-org/react'
import { FC, memo } from 'react'

export const AuthForm: FC = memo(() => {
	return (
		<div className='mx-auto flex flex-col gap-4 max-w-xs'>
			<h1 className='sm:text-xl md:text-2xl font-thin'>Authentication</h1>
			<div className='flex flex-col gap-3'>
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
				<Button radius='sm'>Authenticate</Button>
			</div>
			<Divider />
			<div className='flex flex-col gap-4'>
				<Button variant='ghost' radius='sm'>
					Google
				</Button>
				<Button variant='ghost' radius='sm'>
					Discord
				</Button>
			</div>
		</div>
	)
})
