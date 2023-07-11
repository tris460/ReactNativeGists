import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput'
import styles from '../theme/appTheme'
import usePokemonSearch from '../hooks/usePokemonSearch'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import PokemonCard from '../components/PokemonCard'

const SearchScreen = () => {
    const {isLoading, simplePokemonList} = usePokemonSearch();

    if(isLoading) {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator style={{height: 60}} size={40} color='#f00' />
                <Text style={{color: '#000'}}>Please wait...</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <SearchInput />
            <FlatList 
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({item}) => <PokemonCard pokemon={item} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={(<ActivityIndicator style={{height: 60}} size={20} color='#f00' />)} />
        </SafeAreaView>
    )
}

export default SearchScreen
