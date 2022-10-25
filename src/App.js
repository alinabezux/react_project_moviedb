import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import {Movie, MoviesList} from "./components";
import {MainLayout} from "./components/layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/movie'}/>}/>
                <Route path={'/movie'} element={<MoviesList/>}/>
                <Route path={':id'} element={<Movie/>}/>
            </Route>
        </Routes>
    );
}

export default App;
