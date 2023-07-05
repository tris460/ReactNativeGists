import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({movie, height = 300, width = 200}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
    return (
        <View style={{width, height, marginHorizontal: 5}}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        
        elevation: 18,
    },
    image: {
        flex: 1,
        borderRadius: 15,
    }
})

export default MoviePoster
