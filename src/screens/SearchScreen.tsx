import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput'
import styles from '../theme/appTheme'
import usePokemonSearch from '../hooks/usePokemonSearch'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import PokemonCard from '../components/PokemonCard'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'

const SearchScreen = () => {
    const {isLoading, simplePokemonList} = usePokemonSearch();
    const [term, setTerm] = useState('');
    const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([])

    useEffect(() => {
        if(term.length === 0) {
            return setFilteredPokemon([]);
        }

        if(isNaN(Number(term))) {
            setFilteredPokemon(
                simplePokemonList.filter(pokemon =>  pokemon.name.toLowerCase().includes(term.toLowerCase()))
            );
        } else {
            const pokemonById = simplePokemonList.find(pokemon => pokemon.id === term);
            setFilteredPokemon(
                (pokemonById) ? [pokemonById] : []
            );
        }
    }, [term]);

    if(isLoading) {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator style={{height: 60}} size={40} color='#f00' />
                <Text style={{color: '#000'}}>Please wait...</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{...styles.container, marginBottom: 0}}>
            <SearchInput 
                onDebounce={setTerm}/>
            <FlatList 
                data={filteredPokemon}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
                showsVerticalScrollIndicator={false}
                numColumns={2} />
        </SafeAreaView>
    )
}

export default SearchScreen
