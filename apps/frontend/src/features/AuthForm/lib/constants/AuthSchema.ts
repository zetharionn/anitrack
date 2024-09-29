import { z } from 'zod'

export const AuthSchema = z.object({
	email: z.string().email('Email is incorrect'),
	password: z
		.string()
		.min(8, { message: 'Password is too short' })
		.max(16, { message: 'Password is too long' })
})
