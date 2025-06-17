import { appActions } from '@/store/app'
import { toastSuccessMessage } from '@/utils/toast'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'

const Index = () => {
	const dispatch = useDispatch()

	const handleLogin = () => {
		dispatch(appActions.setIsAuth(true))
		dispatch(appActions.setUser({ name: 'User', email: 'user@user' }))
		toastSuccessMessage('successfully-logged-in')
	}

	return (
		<div>
			<h1>Login</h1>

			<Button variant='contained' color='success' onClick={handleLogin}>
				Login
			</Button>
		</div>
	)
}

export default Index
