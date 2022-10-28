import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";

const Header = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (term) {
            dispatch(moviesActions.searchMovies(term))
        }
    }, [term])


    return (
        <div className={"header"}>
            <img src="https://i.pinimg.com/564x/09/2f/35/092f3539fa9eb8dc298d8c37d2b216e4.jpg" alt="logo"/>
            <div className={"search"}>
                <input type="text" value={term} placeholder="Search movies..."
                       onChange={(event => setTerm(event.target.value))}/>
            </div>

            <button>Change theme</button>

        </div>
    );
}

export {Header}