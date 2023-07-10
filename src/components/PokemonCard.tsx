import React from 'react'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../theme/appTheme';

interface Props {
    pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
    const windowWidth = Dimensions.get('window').width;
    

    return (
        <TouchableOpacity activeOpacity={0.9}>
            <View style={{...styles.cardContainer, width: windowWidth*0.4}}>
                <Text style={styles.cardName}>
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
                <Image
                    source={require('../assets/pokeball-white.png')}
                    style={styles.cardPokeball} />
                <Image 
                    source={{uri: pokemon.picture}}
                    style={styles.cardPicture} />
            </View>
        </TouchableOpacity>
    )
}

export default PokemonCard
