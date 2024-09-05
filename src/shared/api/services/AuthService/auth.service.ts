import { AuthChangeEvent, Session, SupabaseClient } from '@supabase/supabase-js'
import { AuthEvents } from './auth.types'
import type { IAuthService } from './auth.types'

export class AuthService implements IAuthService {
	readonly supabaseClient: SupabaseClient
	constructor(supabase: SupabaseClient) {
		this.supabaseClient = supabase
	}

	async signUp(email: string, password: string) {
		const { error } = await this.supabaseClient.auth.signUp({
			email,
			password
		})
		if (error) throw error
	}

	async signIn(email: string, password: string) {
		const { error } = await this.supabaseClient.auth.signInWithPassword({
			email,
			password
		})
		if (error) throw error
	}

	async signOut() {
		const { error } = await this.supabaseClient.auth.signOut()
		if (error) throw error
	}

	async getSession() {
		const {
			data: { session },
			error
		} = await this.supabaseClient.auth.getSession()
		if (error) throw error
		return session
	}

	async getUser() {
		const {
			data: { user },
			error
		} = await this.supabaseClient.auth.getUser()
		if (error) throw error
		return user
	}

	async listenAuthEvent(
		authEvent: AuthEvents,
		callback: (event?: AuthChangeEvent, session?: Session | null) => void
	) {
		this.supabaseClient.auth.onAuthStateChange((event, session) => {
			if (event === authEvent) {
				callback(event, session)
			}
		})
	}
}
