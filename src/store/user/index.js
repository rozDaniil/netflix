import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isAuth: !!localStorage.getItem('isAuth'),
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload
        }

    }
})

export const { login, logout, setAuth } = userSlice.actions

export default userSlice.reducer