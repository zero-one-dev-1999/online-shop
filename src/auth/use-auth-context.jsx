import { useSelector } from 'react-redux'

const useAuthContext = () =>
	useSelector(({ App: s }) => ({
		user: s.user,
		isAuth: s.isAuth,
	}))

export { useAuthContext }
