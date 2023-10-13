import React, {FC} from 'react';
import {IMarvelComics} from "../modals/modalsMarvelComics";
import {useNavigate} from "react-router-dom";

interface ComicsTitleProps {
    comicsItem: IMarvelComics
}

const ComicsTitle:FC<ComicsTitleProps> = ({comicsItem}) => {
    let navigate = useNavigate();
    return (
    <>
        <div className="card" key={comicsItem.id}
             onClick={() => navigate(`/comics/${comicsItem.id}`)}
        >
            <img src={`${comicsItem.thumbnail.path}.${comicsItem.thumbnail.extension}`} alt={comicsItem.title} />
            <div className="title">
                <h3> {comicsItem.title}</h3>
            </div>
        </div>
    </>
    );
};

export default ComicsTitle;