import type {
	AuthChangeEvent,
	Session,
	SupabaseClient
} from '@supabase/supabase-js'
import type { IAuthService } from './auth.types'
import type { AuthEvents } from './auth.types'

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
		return { session, error }
	}

	async getUser() {
		const {
			data: { user },
			error
		} = await this.supabaseClient.auth.getUser()
		return { user, error }
	}

	async checkAuth() {
		this.getUser().then(res => {
			if (res.error) {
				this.signOut()
			}
		})
	}

	async listenAuthEvent(
		callback: (event?: AuthChangeEvent, session?: Session | null) => void,
		authEvent?: AuthEvents
	) {
		this.supabaseClient.auth.onAuthStateChange((event, session) => {
			callback(authEvent ?? event, session)
		})
	}
}
