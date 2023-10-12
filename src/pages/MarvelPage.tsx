import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";
import React from "react";
import {useMarvels} from "../hooks/marvels";
import Marvel from "../components/Marvel";

export function MarvelPage () {
    //Вынесли методы в hooks
    const {marvels, error, loading} = useMarvels();

    return (
        <div className='content'>
            {loading && <Loader/>}
            {error && <ErrorMsg error={error}/>}
            {marvels.map(marvel => <Marvel
                character={marvel}
                key={marvel.id}
            />)}
        </div>
    );
}