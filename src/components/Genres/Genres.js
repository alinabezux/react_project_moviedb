import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genresActions} from "../../redux";


const Genres = () => {

    const {genres} = useSelector(state => state.genresReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAllGenres())
    }, [dispatch])

    return (
        <div className={"genres_wrap"}>
            {
                genres?.genres?.map(genre => <div key={genre.id}><button>{genre.name}</button></div>)
            }
        </div>
    )
};

export {Genres};
