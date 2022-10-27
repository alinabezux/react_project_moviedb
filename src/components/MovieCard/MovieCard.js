import {Link} from "react-router-dom";

import {Stars} from "../Stars/Stars";
import {useSelector} from "react-redux";


const MovieCard = ({movie}) => {

    const {genres} = useSelector(state => state.genresReducer);
    const findGenre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <Link to={`/movie/${movie.id}`}>
            <div className={"movie"}>
                <h2>{movie.original_title}</h2>
                {
                    <img src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt={movie.original_title}/>
                }
                <h2>{(movie.release_date).substring(0, 4)}</h2>
                <div className={"movie_card_genres"}>
                    {
                        movie?.genre_ids.map(value => <div className={"genre_item"}
                                                           key={value}> {findGenre(value)}</div>)
                    }
                </div>
                <div className={"movie_rating"}>
                    <h3>Rating: <i>{movie.vote_average}</i></h3>
                    <Stars rating={movie.vote_average}/>
                </div>
            </div>
        </Link>

    );
}

export {MovieCard}