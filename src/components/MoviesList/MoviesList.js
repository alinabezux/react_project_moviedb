import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";


const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies, loading, error, page} = useSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getAll(page))
    }, [page, dispatch])

    return (
        <div className={"movies"}>
            <div className={"movies_list"}>
                {
                    movies.results?.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
                {loading && <h1>Loading...........</h1>}
                {error && <h1>Error:(</h1>}
            </div>
            <div className={"pagination"}>
                <button className={"pag_btn"} onClick={() => dispatch(moviesActions.prevPage(1))}>Prev</button>
                <h3>{page}</h3>
                <button className={"pag_btn"} onClick={() => dispatch(moviesActions.nextPage(1))}>Next</button>
            </div>
        </div>
    );
}

export {MoviesList}