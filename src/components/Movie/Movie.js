import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect} from "react";

import {moviesActions} from "../../redux";

const Movie = () => {
    const {id} = useParams();

    const {currentMovie} = useSelector(state => state.moviesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById(id))
    }, [id, dispatch])

    return (
        <div>
            <div>
                <img src={'https://image.tmdb.org/t/p/w200/' + currentMovie?.poster_path}
                     alt={currentMovie?.original_title}/>
            </div>
            <div>
                <div>

                    <div><h1>{currentMovie?.original_title}</h1></div>
                    <div><h2>{currentMovie?.tagline}</h2></div>
                </div>
                <div>

                    <div><h3>Released:{currentMovie?.release_date}</h3></div>
                    <div><h3>Budget: {currentMovie?.budget}</h3></div>
                    <div><p>{currentMovie?.overview}</p></div>
                </div>
            </div>
        </div>
    );
}

export {Movie}
