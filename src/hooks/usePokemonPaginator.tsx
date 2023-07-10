import React, { useEffect, useRef } from 'react'
import pokemonApi from '../api/pokemonApi';

const usePokemonPaginator = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    useEffect(() => {
        loadPokemons();
    }, []);
    
    const loadPokemons = async() => {
        const res = await pokemonApi.get(nextPageUrl.current);
        console.log(res.data);
    }

    return (
        <div>
        
        </div>
    )
}

export default usePokemonPaginator
