import React, { useEffect, useState } from 'react'
import { FullPokemon } from '../interfaces/pokemonInterfaces';
import pokemonApi from '../api/pokemonApi';

const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<FullPokemon>({} as FullPokemon);

    const loadPokemon = async() => {
        const res = await pokemonApi.get<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(res.data);
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon,
    }
}

export default usePokemon
