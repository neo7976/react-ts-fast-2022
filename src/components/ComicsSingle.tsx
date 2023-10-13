import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {useMarvelComicsById} from "../hooks/marvels";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";

const ComicsSingle: FC = () => {
    const {id} = useParams();

        const {comics, error, loading} = useMarvelComicsById(id);
        console.log(comics);
        return (
            <>
                <div className='box-content'>
                    {loading && <Loader/>}
                    <div className={'right-box'}>
                        <img
                            src={`${comics?.thumbnail.path}.${comics?.thumbnail.extension}`}
                            alt={comics?.title}
                            className="w-1/6"
                        />
                    </div>
                    <div className="left-box">
                        <h1>{comics?.title}</h1>
                        <h4>{comics?.description}</h4>
                    </div>
                </div>
                {/*<div className="content">*/}
                {/*    {character?.comics.items.map(comics => <Comics comicsItem={comics}/>)}*/}
                {/*</div>*/}
            </>
        );
}


export default ComicsSingle;