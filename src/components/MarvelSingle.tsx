import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {useMarvelById} from "../hooks/marvels";
import "./style/marvel/marvelStyle.css";
import Comics from "./Comics";

const MarvelSingle: FC = () => {

    const {id} = useParams();
    const {character, error, loading} = useMarvelById(id);

    return (
        <>
            <div className='box-content'>
                <div className={'right-box'}>
                    <img
                        src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                        alt={character?.name}
                        className="w-1/6"
                    />
                </div>
                <div className="left-box">
                    <h1>{character?.name}</h1>
                    <h4>{character?.description}</h4>
                </div>
            </div>
            <div className="content">
                <Comics id={character?.id!} key={character?.id}/>)
            </div>
        </>


    )
        ;
};

export default MarvelSingle;
