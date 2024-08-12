import { createClient, SupabaseClientOptions } from '@supabase/supabase-js'
import { AuthService } from './services'

const options: SupabaseClientOptions<'public'> | undefined = {}

const supabase = createClient(
	`${import.meta.env.VITE_SUPABASE_URL}`,
	`${import.meta.env.VITE_SUPABASE_KEY}`,
	options
)

export const authService = new AuthService(supabase)
