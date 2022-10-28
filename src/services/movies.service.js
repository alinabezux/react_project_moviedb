import axiosService from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => axiosService.get(`${urls.movies}?page=${page}`),
    getMovieById: (id) => axiosService.get(`${urls.movie}/${id}`),
    searchMovies: (keyword) => axiosService.get(`${urls.searchMovies}?query=${keyword}`)
}

export {moviesService}