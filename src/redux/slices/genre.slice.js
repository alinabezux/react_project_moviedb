import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../../services";

let initialState = {
    genres: [],
    genre: null,
    loading: true,
    currentGenres: [],
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
        },
        selectGenre: (state, action) => {
            state.currentGenres.push(action.payload);
        },
        deleteGenre: (state, action) => {
            const index = state.currentGenres.findIndex(genre => genre.id === action.payload);
            state.currentGenres.splice(index, 1)
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload
                state.loading = false
            })
})

const {reducer: genresReducer, actions: {getGenre, selectGenre, deleteGenre}} = genresSlice;

const genresActions = {
    getAllGenres, getGenre, deleteGenre, selectGenre
}
export {genresReducer, genresActions}