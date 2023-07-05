import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
}

const MoviePoster = ({movie}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri}}
                    style={styles.image} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 300,
    },
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
