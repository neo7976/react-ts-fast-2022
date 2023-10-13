import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";
import {MarvelPage} from "./pages/MarvelPage";
import MarvelSingle from "./components/MarvelSingle";
import ComicsSingle from "./components/ComicsSingle";

const App: FC = () => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<ProductPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/marvels' element={<MarvelPage/>}/>
                <Route path='/:id' element={<MarvelSingle/>}/>
                <Route path='/comics/:id' element={<ComicsSingle/>}/>
            </Routes>
        </>

    );
}

export default App;
