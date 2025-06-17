import { toast } from 'react-toastify'

export const toastSuccessMessage = message => {
	toast.success(message, {
		theme: 'colored',
	})
}

export const toastErrorMessage = message => {
	toast.error(message, {
		theme: 'colored',
	})
}
