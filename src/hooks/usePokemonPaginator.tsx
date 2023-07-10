import React, { useEffect, useRef, useState } from 'react'
import pokemonApi from '../api/pokemonApi';
import { PokemonResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonPaginator = () => {
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        loadPokemon();
    }, []);
    
    const loadPokemon = async() => {
        const res = await pokemonApi.get<PokemonResponse>(nextPageUrl.current);
        nextPageUrl.current = res.data.next;
        mapPokemonList(res.data.results);
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        pokemonList.forEach(poke => console.log(poke.name))
    }

    return (
        <div>
        
        </div>
    )
}

export default usePokemonPaginator
