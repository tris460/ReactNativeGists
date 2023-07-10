import React from 'react'
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import styles from '../theme/appTheme';
import usePokemonPaginator from '../hooks/usePokemonPaginator';

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
            <FlatList 
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={({item}) => <Text>{item.name}</Text>}
                onEndReached={loadPokemon}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={(<ActivityIndicator style={{height: 60}} size={20} color='#777' />)} />
        </SafeAreaView> 
    )
}

export default HomeScreen
