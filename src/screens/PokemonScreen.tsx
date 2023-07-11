import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigation'
import styles from '../theme/appTheme'
import usePokemon from '../hooks/usePokemon'
import PokemonDetails from '../components/PokemonDetails'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({route}: Props) => {
    const {simplePokemon} = route.params;
    const {isLoading, pokemon} =usePokemon(simplePokemon.id);

    return (
        <View style={{flex: 1}}>
            <View style={styles.detailsImageContainer}>
                <Text style={styles.detailsName}>
                    {simplePokemon.name} #{simplePokemon.id}
                </Text>
                <Image
                    source={require('../assets/pokeball-white.png')} 
                    style={styles.detailsPokeball} />
                <Image 
                    source={{uri: simplePokemon.picture}} 
                    style={styles.detailsPicture} />
            </View>
            {
                isLoading 
                ? <View style={styles.loadingIndicator}>
                    <ActivityIndicator
                        color={'#f00'}
                        size={30} />
                </View>
                : <PokemonDetails pokemon={pokemon}/>
            }
            
        </View>
    )
}

export default PokemonScreen
