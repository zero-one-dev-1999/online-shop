import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Router from './routes'
import { persistor, store } from './store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { setLocale } from 'yup'

setLocale({
	mixed: {
		required: 'This field is required',
	},
})

function App() {
	return (
		<ReduxProvider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<ToastContainer position='top-right' autoClose={2000} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
					<Router />
				</BrowserRouter>
			</PersistGate>
		</ReduxProvider>
	)
}

export default App
