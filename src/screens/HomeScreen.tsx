import React from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, View } from 'react-native';
import styles from '../theme/appTheme';
import usePokemonPaginator from '../hooks/usePokemonPaginator';
import PokemonCard from '../components/PokemonCard';

const HomeScreen = () => {
    const {simplePokemonList, loadPokemon} = usePokemonPaginator();
    
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../assets/pokeball.png')}
                style={styles.imgBackground}/>
            <View style={styles.titleContainer}>
                <Image 
                    source={require('../assets/pokedex_title.png')}
                    style={styles.titleImage}
                    resizeMode='contain'/>
            </View>
            <View style={{alignItems: 'center'}}>
                <FlatList 
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    renderItem={({item}) => <PokemonCard pokemon={item} />}
                    onEndReached={loadPokemon}
                    onEndReachedThreshold={0.5}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListFooterComponent={(<ActivityIndicator style={{height: 60}} size={20} color='#f00' />)} />
            </View>
        </SafeAreaView> 
    )
}

export default HomeScreen
