import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const { actions: basketActions, reducer } = createSlice({
	name: 'basket',
	initialState,
	reducers: {},
})

export { basketActions, reducer as default }
