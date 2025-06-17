import { DASHBOARD_PAGE } from '@/helpers/pages'
import { useAuthContext } from './use-auth-context'
import { Navigate } from 'react-router-dom'

const GuestGuard = ({ children }) => {
	const { isAuth } = useAuthContext()

	if (isAuth) {
		return <Navigate to={DASHBOARD_PAGE} />
	}

	return <>{children}</>
}

export default GuestGuard
