import React, {FC} from 'react';
import {ItemComics} from "../modals/modalsMarvel";
import {getMarvelKey, useMarvelComicsById} from "../hooks/marvels";

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
        <div>
            <ul>
                {comics.map(f => (f.title))}
            </ul>
        </div>
    );
};

export default Comics;
