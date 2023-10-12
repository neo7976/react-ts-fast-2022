import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {IMarvel, IMarvelRoot} from "../modals/modalsMarvel";



export function useMarvels() {
    const [marvels, setMarvels] = useState<IMarvel[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [url, setUrl] =
        useState('https://gateway.marvel.com/v1/public/characters?ts=3&apikey=5f93e7f9f9bea56f0834df37270f5b79&hash=62739f7ffc11c67b3f18a00cfc8ce6ce');

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
    }, [])
    return {marvels: marvels, error, loading};
}

export function useMarvelById(id:any) {
    const [character, setCharacter] = useState<IMarvel>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    async function fetchCharacterById() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IMarvelRoot>(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=3&apikey=5f93e7f9f9bea56f0834df37270f5b79&hash=62739f7ffc11c67b3f18a00cfc8ce6ce`);
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

