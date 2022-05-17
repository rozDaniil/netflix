import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user'
import moviesSlice from './movies'

export default configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
    }
})