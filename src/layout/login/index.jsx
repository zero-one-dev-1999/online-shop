import { Stack, Grid } from '@mui/material'
import { Outlet } from 'react-router'

const LoginLayout = () => {
	return (
		<Grid container spacing={1}>
			<Grid size={{ xs: 12, md: 7 }}>rasm</Grid>
			<Grid size={{ xs: 12, md: 5 }}>
				<Outlet />
			</Grid>
		</Grid>
	)
}

export default LoginLayout
