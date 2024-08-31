import { SupabaseClient } from '@supabase/supabase-js'
import { IAuthService } from './auth.types'

export class AuthService implements IAuthService {
	readonly supabaseClient: SupabaseClient
	constructor(supabase: SupabaseClient) {
		this.supabaseClient = supabase
	}

	signUp = async (email: string, password: string) => {
		const { error } = await this.supabaseClient.auth.signUp({
			email,
			password
		})
		if (error) throw error
	}

	signIn = async (email: string, password: string) => {
		const { error } = await this.supabaseClient.auth.signInWithPassword({
			email,
			password
		})
		if (error) throw error
	}

	signOut = async () => {
		const { error } = await this.supabaseClient.auth.signOut()
		if (error) throw error
	}

	getSession = async () => {
		const {
			data: { session },
			error
		} = await this.supabaseClient.auth.getSession()
		if (error) throw error
		return session
	}
}
