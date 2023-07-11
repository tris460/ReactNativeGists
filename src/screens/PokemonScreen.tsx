import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigation'
import styles from '../theme/appTheme'

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
    const {simplePokemon} = route.params;

    return (
        <View>
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
        </View>
    )
}

export default PokemonScreen
