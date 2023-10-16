import React, {ChangeEvent, useState} from "react";
import {getMarvelKey, useMarvels} from "../hooks/marvels";
import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";
import MarvelCharacterTitle from "../components/marvel/characters/MarvelCharacterTitle";

export function MarvelPage() {
    const key = getMarvelKey();
    const initUrl = `https://gateway.marvel.com/v1/public/characters?${key}`;

    const [url, setUrl] =
        useState(initUrl);
    //Вынесли методы в hooks
    const {marvels, error, loading} = useMarvels(url);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.trim() === '') {
            setUrl(initUrl);
        } else {
            setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${e.target.value}&${key}`)
        }
    };
    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./images/marvel/fotooboi-geroi-marvel-foto.jpg" alt="hhh"/>
                </div>
                <div className="search-bar">
                    <img src="./images/marvel/logo.jpg" alt="logo"/>
                    <input type="search" placeholder='Search Here'
                           className='search'
                           onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="content">
                {loading && <Loader/>}
                {error && <ErrorMsg error={error}/>}
                {marvels.map(marvel => <MarvelCharacterTitle
                    character={marvel}
                    key={marvel.id}
                />)}
            </div>
        </>
    )
}