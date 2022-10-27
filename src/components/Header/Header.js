import {useState} from "react";

const Header = () => {
    const [term, setTerm] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(term)

    }
    return (
        <div className={"header"}>
            <img src="https://i.pinimg.com/564x/09/2f/35/092f3539fa9eb8dc298d8c37d2b216e4.jpg" alt="logo"/>
            <div className={"search"}>
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search movies..."
                           onChange={(event => setTerm(event.target.value))}/>
                    <button type="submit" className={"btn_search"}>Search</button>
                </form>
            </div>

            <button>Change theme</button>

        </div>
    );
}

export {Header}