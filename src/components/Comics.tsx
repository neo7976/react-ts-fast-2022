import React, {FC} from 'react';
import {ItemComics} from "../modals/modalsMarvel";
import {getMarvelKey, useMarvelComicsById} from "../hooks/marvels";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import Marvel from "./Marvel";
import ComicsTitle from "./style/ComicsTitle";

interface ComicsProps {
    comicsItem: ItemComics
}

const Comics: FC<ComicsProps> = ({comicsItem}) => {
    const key = getMarvelKey();
    const reg1 = comicsItem.resourceURI.lastIndexOf('/');

    const ref = `${comicsItem.resourceURI}?${key}}`;
    const comicsId = comicsItem.resourceURI.substring(reg1 + 1);

    const {comics, error, loading} = useMarvelComicsById(comicsId)
    return (
        <div className="content">
            {loading && <Loader/>}
            {error && <ErrorMsg error={error}/>}
                {comics.map(f =>
                    <ComicsTitle
                        key={f.id}
                        comicsItem={f}
                />)}
        </div>
    );
};

export default Comics;
