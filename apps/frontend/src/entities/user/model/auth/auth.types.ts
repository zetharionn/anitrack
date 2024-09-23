export interface IAuthStore {
	isAuth: boolean
	signUp: (email: string, password: string) => void
	signIn: (email: string, password: string) => void
	signOut: () => void
}
