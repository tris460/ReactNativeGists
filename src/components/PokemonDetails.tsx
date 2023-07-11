import React from 'react'
import { FullPokemon } from '../interfaces/pokemonInterfaces'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import styles from '../theme/appTheme'

interface Props {
    pokemon: FullPokemon
}

const PokemonDetails = ({pokemon}: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{...StyleSheet.absoluteFillObject}}>
            <View style={{marginTop: 300, marginBottom: 10}}>
                
                <Text style={styles.title}>Base experience</Text>
                <Text style={styles.data}>
                    {pokemon.base_experience}
                </Text>

                <Text style={styles.title}>Types</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pokemon.types.map(({type}) => (
                        <Text style={{...styles.data, marginEnd: 10}}>
                            {type.name}
                        </Text>
                    ))}
                </View>

                <Text style={styles.title}>Weight & Height</Text>
                <Text style={styles.data}>
                    {pokemon.weight}kg - {pokemon.height}mt
                </Text>

                <Text style={styles.title}>Sprites</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <Image source={{uri: pokemon.sprites.front_default}} style={styles.sprites} />
                    <Image source={{uri: pokemon.sprites.back_default}} style={styles.sprites} />
                    <Image source={{uri: pokemon.sprites.front_shiny}} style={styles.sprites} />
                    <Image source={{uri: pokemon.sprites.back_shiny}} style={styles.sprites} />
                </ScrollView>

                <Text style={styles.title}>Abilities</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pokemon.abilities.map(({ability}) => (
                        <Text style={{...styles.data, marginEnd: 10}}>
                            {ability.name}
                        </Text>
                    ))}
                </View>

                <Text style={styles.title}>Moves</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {pokemon.moves.map(({move}) => (
                        <Text style={{...styles.data, marginEnd: 10}}>
                            {move.name}
                        </Text>
                    ))}
                </View>

                <Text style={styles.title}>Stats</Text>
                <View>
                    {pokemon.stats.map((stats) => (
                        <Text style={{...styles.data, marginEnd: 10}}>
                            {stats.stat.name}: {stats.base_stat}
                        </Text>
                    ))}
                </View>

                <View style={{alignItems: 'center'}}>
                    <Image source={{uri: pokemon.sprites.front_default}} style={styles.sprites} />
                </View>
            </View>
        </ScrollView>
    )
}

export default PokemonDetails
