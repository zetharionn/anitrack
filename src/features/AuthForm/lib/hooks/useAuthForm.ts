import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AuthFormTypes, AuthSchema, AuthType } from '../constants'
import { authService } from '@shared/api'

export const useAuthForm = (authFormType: AuthFormTypes) => {
	const {
		handleSubmit,
		formState: { errors },
		register
	} = useForm<AuthType>({
		resolver: zodResolver(AuthSchema)
	})

	const onSubmit = handleSubmit(data => {
		if (authFormType === AuthFormTypes.SignUpForm) {
			authService.signUp(data.email, data.password)
		} else {
			authService.signIn(data.email, data.password)
		}
	})

	return { onSubmit, formState: { errors }, register }
}
