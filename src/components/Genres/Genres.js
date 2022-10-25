import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genresActions} from "../../redux";

import css from './Genres.module.css'

const Genres = () => {

    const {genres, currentGenres} = useSelector(state => state.genresReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAllGenres())
    }, [dispatch])

    const handleSubmit = (id) => {
        if (currentGenres?.includes(id)) {
            dispatch(genresActions.deleteGenre(id))
        } else dispatch(genresActions.selectGenre(id))
    }

    return (
        <div className={css.genres_wrap}>
            {
                genres?.genres?.map(genre => <div key={genre.id}><button onClick={() => handleSubmit(genre.id)}>{genre.name}</button></div>)
            }
        </div>
    )
};

export {Genres};
