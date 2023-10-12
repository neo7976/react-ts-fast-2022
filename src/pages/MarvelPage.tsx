import React from "react";
import {useMarvels} from "../hooks/marvels";
import Marvel from "../components/Marvel";
import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";

export function MarvelPage() {
    //Вынесли методы в hooks
    const {marvels, error, loading} = useMarvels();

    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./images/marvel/fotooboi-geroi-marvel-foto.jpg" alt="hhh"/>
                </div>
                <div className="search-bar">
                    <img src="./images/marvel/logo.jpg" alt="logo"/>
                    {/*<input type="search" placeholder='Search Here'*/}
                    {/*       className='search'*/}
                    {/*       onChange={e => setSearch(e.target.value)}*/}
                    {/*       onKeyPress={searchMarvel}*/}
                    {/*/>*/}
                </div>
            </div>
            <div className="content">
                {loading && <Loader/>}
                {error && <ErrorMsg error={error}/>}
                {marvels.map(marvel => <Marvel
                    character={marvel}
                    key={marvel.id}
                />)}
            </div>
        </>
    )
}