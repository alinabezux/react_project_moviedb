import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movies.slice";
import {genresReducer} from "./slices/genre.slice";


const rootReducer = combineReducers({
    moviesReducer,genresReducer
});

const setupStore = () => configureStore({reducer: rootReducer});

export {setupStore};
