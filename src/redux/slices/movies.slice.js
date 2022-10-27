import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    currentMovie: null,
    error: null,
    loading: false,
    page: 1,

}

const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMovieById = createAsyncThunk(
    'moviesSlice/getMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            if (state.page < 500) state.page += action.payload
        },
        prevPage: (state, action) => {
            if (state.page > 1) state.page -= action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.currentMovie = action.payload
            })
})

const {reducer: moviesReducer, actions: {nextPage, prevPage}} = moviesSlice;

const moviesActions = {
    getAll, nextPage, prevPage, getMovieById
}

export {moviesReducer, moviesActions}

