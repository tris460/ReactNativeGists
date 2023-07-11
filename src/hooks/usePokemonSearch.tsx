import { useEffect, useState } from 'react'
import pokemonApi from '../api/pokemonApi';
import { PokemonResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

const usePokemonSearch = () => {
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadPokemon();
    }, []);
    
    const loadPokemon = async() => {
        const res = await pokemonApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=1500');
        mapPokemonList(res.data.results);
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList:SimplePokemon[] = pokemonList.map(({name, url}) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2]; 
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return {id, picture, name};
        });

        setSimplePokemonList(newPokemonList);
        setIsLoading(false);
    }

    return {
        isLoading,
        simplePokemonList,
    }
}

export default usePokemonSearch
