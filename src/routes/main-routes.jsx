import AuthGuard from '@/auth/auth-guard'
import Loadable from '@/components/loadable'
import { DASHBOARD_PAGE } from '@/helpers/pages'
import { lazy } from 'react'
import { Navigate } from 'react-router'

const DashboardLayout = Loadable(lazy(() => import('@/layout/main')))
const DashboardPage = Loadable(lazy(() => import('@/pages/dashboard')))

const MainRoutes = {
	path: '/',
	children: [
		{
			path: '/',
			element: (
				<AuthGuard>
					<DashboardLayout />
				</AuthGuard>
			),
			children: [
				{
					path: '*',
					element: <Navigate replace to={DASHBOARD_PAGE} />,
				},
				{
					path: '/',
					element: <Navigate replace to={DASHBOARD_PAGE} />,
				},
				{
					path: DASHBOARD_PAGE,
					element: <DashboardPage />,
				},
			],
		},
	],
}

export default MainRoutes
