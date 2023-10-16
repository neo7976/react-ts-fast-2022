import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage";
import {Navigation} from "./components/Navigation";
import {MarvelPage} from "./pages/MarvelPage";
import MarvelCharacterPage from "./pages/MarvelCharacterPage";
import MarvelComicsPage from "./pages/MarvelComicsPage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import TodoQueryPage from "./pages/TodoQueryPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})
const App: FC = () => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<ProductPage/>}/>
                <Route path='/todo' element={
                    <QueryClientProvider client={queryClient}>
                        <TodoQueryPage/> </QueryClientProvider>}/>
                <Route path='/marvels' element={<MarvelPage/>}/>
                <Route path='marvel/character/:id' element={<MarvelCharacterPage/>}/>
                <Route path='marvel/comics/:id' element={<MarvelComicsPage/>}/>
            </Routes>
        </>
    );
}

export default App;
