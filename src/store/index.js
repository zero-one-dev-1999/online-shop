import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import reducers from './reducers'
import { configureStore } from '@reduxjs/toolkit'

const persistedReducer = persistReducer(
	{
		storage,
		version: 5,
		key: 'root',
		whitelist: ['App', 'Basket'],
		transforms: [
			encryptTransform({
				secretKey: 'QuYu1N1fZWuN3SFJ99d8l1CKyBFKs2+9VtBEjSWc0URLLcmoGnuF1KW/PHC/xgse',
			}),
		],
	},
	reducers,
)

const store = configureStore({
	reducer: persistedReducer,
	// devTools: import.meta.env.DEV,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST'],
				ignoredPaths: ['register'],
			},
		}),
})

const persistor = persistStore(store)
export { store, persistor }
