import GuestGuard from '@/auth/guest-guard'
import Loadable from '@/components/loadable'
import { LOGIN_PAGE, REGISTER_PAGE } from '@/helpers/pages'
import { lazy } from 'react'
import { Navigate } from 'react-router'

const LoginLayout = Loadable(lazy(() => import('@/layout/login')))
const LoginPage = Loadable(lazy(() => import('@/pages/auth/login')))
const RegisterPage = Loadable(lazy(() => import('@/pages/auth/register')))

const LoginRoutes = {
	path: '/',
	children: [
		{
			path: '/',
			element: (
				<GuestGuard>
					<LoginLayout />
				</GuestGuard>
			),
			children: [
				{
					path: '*',
					element: <Navigate replace to={LOGIN_PAGE} />,
				},
				{
					path: '/',
					element: <Navigate replace to={LOGIN_PAGE} />,
				},
				{
					path: LOGIN_PAGE,
					element: <LoginPage />,
				},
				{
					path: REGISTER_PAGE,
					element: <RegisterPage />,
				},
			],
		},
	],
}

export default LoginRoutes
