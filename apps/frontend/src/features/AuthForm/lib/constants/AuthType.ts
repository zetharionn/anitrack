import { z } from 'zod'
import { AuthSchema } from './AuthSchema'

export type AuthType = z.infer<typeof AuthSchema>
