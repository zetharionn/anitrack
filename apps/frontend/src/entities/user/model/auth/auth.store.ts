import { authService } from '@shared/api'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IAuthStore } from './auth.types'

export const useAuthStore = create<IAuthStore>()(
	persist(
		set => ({
			isAuth: false,
			signUp: (email: string, password: string) => {
				authService.signUp(email, password)
				set({ isAuth: true })
			},
			signIn: (email: string, password: string) => {
				authService.signIn(email, password)
				set({ isAuth: true })
			},
			signOut: () => {
				authService.signOut()
				set({ isAuth: false })
			}
		}),
		{
			name: 'auth-store'
		}
	)
)
