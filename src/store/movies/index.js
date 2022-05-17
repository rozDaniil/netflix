import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../services/axios'
import request from '../../services/request'

export const fetchBannerMovies = createAsyncThunk(
    'movies/fetchBannerMovies',
    async function(_, { rejectWithValue }) {
        try {
            const response = await axios.get(request.fetchNetflixOriginals)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async function(path, { rejectWithValue }) {
        try {
            const response = await axios.get(path)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        test: [],
        bannerMovies: [],
        status: null,
        error: null,
    },
    reducers: {
        setTest(state, action) {
            state.test = [...state.test, action.payload]
        },
    },
    extraReducers: {
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.movies.push(action.payload)
        },
        [fetchBannerMovies.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchBannerMovies.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.bannerMovies = action.payload
        },
        [fetchBannerMovies.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

export const {} = moviesSlice.actions
export default moviesSlice.reducer