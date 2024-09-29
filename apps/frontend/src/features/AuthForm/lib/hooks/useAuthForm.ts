import { useAuthStore } from '@entities/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AuthFormTypes, AuthSchema, type AuthType } from '../constants'

export const useAuthForm = (authFormType: AuthFormTypes) => {
	const {
		handleSubmit,
		formState: { errors },
		register
	} = useForm<AuthType>({
		resolver: zodResolver(AuthSchema)
	})

	const signUp = useAuthStore(state => state.signUp)
	const signIn = useAuthStore(state => state.signIn)

	const onSubmit = handleSubmit(data => {
		if (authFormType === AuthFormTypes.SignUpForm) {
			signUp(data.email, data.password)
		} else {
			signIn(data.email, data.password)
		}
	})

	return { onSubmit, formState: { errors }, register }
}
