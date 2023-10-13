import React, {FC} from 'react';
import {ItemComics} from "../modals/modalsMarvel";
import {getMarvelKey, useMarvelComicsByCharacterId} from "../hooks/marvels";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import ComicsTitle from "./ComicsTitle";

interface ComicsProps {
    comicsItem?: ItemComics
    id: number
}

const Comics: FC<ComicsProps> = ({id}) => {
    const {comics, error, loading} = useMarvelComicsByCharacterId(id)
    return (
        <div className="content-comics">
            {loading && <Loader/>}
            {error && <ErrorMsg error={error}/>}
            {comics.map(f =>
                <ComicsTitle
                    key={f.id}
                    comicsItem={f}
                />)}
        </div>
    );
}

export default Comics;
