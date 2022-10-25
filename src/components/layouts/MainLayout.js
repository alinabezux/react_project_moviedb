import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
import {Genres} from "../Genres/Genres";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Genres/>
            <Outlet/>
        </div>
    );
}

export {MainLayout}