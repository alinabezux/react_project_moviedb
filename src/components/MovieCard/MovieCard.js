import {Link} from "react-router-dom";

import css from './MovieCard.module.css'

import {Stars} from "../Stars/Stars";

const MovieCard = ({movie}) => {

    return (
        <Link to={`/movie/${movie.id}`}>
            <div className={css.container_MovieCard}>
                <div className={"movie_image"}>
                    {
                        <img src={'https://image.tmdb.org/t/p/w200/' + movie.poster_path} alt={movie.original_title}/>
                    }
                </div>
                <h2>{movie.original_title}</h2>
                <Stars rating={movie.vote_average}/>
            </div>
        </Link>

    );
}

export {MovieCard}