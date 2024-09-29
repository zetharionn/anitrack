import type { z } from 'zod'
import type { AuthSchema } from './AuthSchema'

export type AuthType = z.infer<typeof AuthSchema>
