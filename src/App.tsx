import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";
import {MarvelPage} from "./pages/MarvelPage";
import MarvelCharacterPage from "./pages/MarvelCharacterPage";
import MarvelComicsPage from "./pages/MarvelComicsPage";

const App: FC = () => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<ProductPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/marvels' element={<MarvelPage/>}/>
                <Route path='marvel/character/:id' element={<MarvelCharacterPage/>}/>
                <Route path='marvel/comics/:id' element={<MarvelComicsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
