import type { SupabaseClient, Session } from '@supabase/supabase-js'

export interface IAuthService {
	readonly supabaseClient: SupabaseClient
	signUp: (email: string, password: string) => void
	signIn: (email: string, password: string) => void
	signOut: () => void
	getSession: () => Promise<Session | null>
}
