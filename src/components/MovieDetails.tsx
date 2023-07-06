import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FullMovie } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import CastItem from './CastItem';

interface Props {
    fullMovie: FullMovie;
    cast: Cast[];
}

const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <>
    <View>
        <View style={{marginHorizontal: 10, flexDirection: 'row'}}>  
            <Icon 
            name="star"
            color='#e3af02'
            size={16} />
            <Text style={{marginHorizontal: 5}}>{fullMovie.vote_average}</Text>
            <Text>
                - {fullMovie.genres.map(g => g.name).join(', ')}
            </Text>
        </View>
        <View style={{marginHorizontal: 10}}>
            <Text style={styles.title}>
                Story
            </Text>
            <Text style={{fontSize: 16}}>{fullMovie.overview}</Text>
            <Text style={styles.title}>
                Budget
            </Text>
            <Text style={{fontSize: 16}}>${fullMovie.budget}</Text>
        </View>
        <View style={{marginHorizontal: 10}}>
            <Text style={styles.title}>
                Cast
            </Text>
            <CastItem actor={cast[0]} />
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18, 
        marginVertical: 10, 
        fontWeight: 'bold', 
        color: '#000'
    }
})

export default MovieDetails
