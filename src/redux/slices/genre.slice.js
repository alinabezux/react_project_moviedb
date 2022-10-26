import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";

let initialState = {
    genres: [],
    genre: null,
    loading: true
}

let getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.responce.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenre: (state, action) => {
            state.genre = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = false
            })
            .addCase(getAllGenres.pending, (state, action) => {
                state.loading = true
            })
})

const {reducer: genresReducer, actions: {getGenre}} = genresSlice;

const genresActions = {
    getAllGenres, getGenre
}
export {genresReducer, genresActions}