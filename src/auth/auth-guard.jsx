import { LOGIN_PAGE } from '@/helpers/pages'
import { useAuthContext } from './use-auth-context'
import { Navigate } from 'react-router-dom'

const AuthGuard = ({ children }) => {
	const { isAuth } = useAuthContext()

	if (!isAuth) {
		return <Navigate to={LOGIN_PAGE} />
	}

	return <>{children}</>
}

export default AuthGuard
