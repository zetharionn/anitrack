import { create } from 'zustand'
import type { IAuthStore } from './auth.types'
import { authService } from '@shared/api'

export const useAuthStore = create<IAuthStore>((set, get) => ({
	isAuth: false,
	signUp: (email: string, password: string) => {
		authService.signUp(email, password)
		set({ isAuth: (get().isAuth = true) })
	},
	signIn: (email: string, password: string) => {
		authService.signIn(email, password)
		set({ isAuth: (get().isAuth = true) })
	},
	signOut: () => {
		authService.signOut()
		set({ isAuth: (get().isAuth = false) })
	}
}))
