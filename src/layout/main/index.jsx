import { Box, Divider, Stack } from '@mui/material'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
	return (
		<>
			<Stack sx={{ height: '80px' }}>Header</Stack>

			<Divider sx={{ borderStyle: 'dashed' }} />
			<Divider sx={{ borderStyle: 'dashed' }} />
			<Box
				sx={{
					height: 'calc(100vh - 82px)',
					overflowY: 'auto',
					scrollbarWidth: 'thin',
				}}
			>
				<Outlet />
			</Box>
		</>
	)
}

export default DashboardLayout
