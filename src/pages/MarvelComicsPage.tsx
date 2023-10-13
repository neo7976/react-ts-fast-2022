import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import {useMarvelComicsById} from "../hooks/marvels";
import Loader from "../components/Loader";
import {PiCurrencyDollarBold} from "react-icons/pi";
import ErrorMsg from "../components/ErrorMsg";

const MarvelComicsPage: FC = () => {
    const {id} = useParams();
    const {comics, error, loading} = useMarvelComicsById(id);
    return (
        <>
            {loading && <Loader/>}
            <div className='box-content'>
                {error && <ErrorMsg error={error}/>}
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
                    <div>{comics?.prices.map(price => (
                        <div
                            className={'content-price'}
                            key={price.type}
                        >
                            {price.type === "digitalPurchasePrice" ? 'Цифровое издание: ' : "Печатное издание: "}
                            {price.price}
                            <PiCurrencyDollarBold/>
                        </div>
                    ))}</div>
                </div>
            </div>
            {/*<div className="content">*/}
            {/*    {character?.comics.items.map(comics => <Comics comicsItem={comics}/>)}*/}
            {/*</div>*/}
        </>
    );
}


export default MarvelComicsPage;