import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {IMarvel, IMarvelRoot} from "../modals/modalsMarvel";
import {ComicsRoot, IMarvelComics} from "../modals/modalsMarvelComics";

/*
getMarvelKey() - содержит уникальный ключ
для получения данных с сервера при помощи генерации
https://developer.marvel.com/documentation/authorization
Api сайта для различных запросов
https://developer.marvel.com/docs
* */

export function getMarvelKey() {
    return 'ts=3&apikey=5f93e7f9f9bea56f0834df37270f5b79&hash=62739f7ffc11c67b3f18a00cfc8ce6ce';
}

export function useMarvels(url: string) {
    const [marvels, setMarvels] = useState<IMarvel[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    async function fetchCharacters() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IMarvelRoot>(url);
            console.log(response.data.data.results);
            setMarvels(response.data.data.results);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [url])
    return {marvels: marvels, error, loading};
}

export function useMarvelById(id: any) {
    const [character, setCharacter] = useState<IMarvel>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchCharacterById() {
        const key = getMarvelKey();
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IMarvelRoot>(`https://gateway.marvel.com:443/v1/public/characters/${id}?${key}`);
            console.log(response.data.data.results);
            setCharacter(response.data.data.results[0]);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchCharacterById()
    }, [])

    return {character: character, error, loading};
}

export function useMarvelComicsById(id: any) {
    const [comics, setComics] = useState<IMarvelComics[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchCharacterById() {
        const key = getMarvelKey();
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<ComicsRoot>(`https://gateway.marvel.com:443/v1/public/comics/${id}?${key}`);
            console.log(response.data.data.results);
            setComics(response.data.data.results);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchCharacterById()
    }, [])

    return {comics: comics, error, loading};
}

