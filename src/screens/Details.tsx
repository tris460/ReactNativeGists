import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/NavigationStack'
import { useMovieDetails } from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const Details = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieData} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri}}
          style={styles.imagePoster}/>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subtitle}>{movie.title}</Text>
      </View>
      <View>
        {
          isLoading 
          ? <ActivityIndicator size={35} color={'#777'} style={{margin: 20}} /> 
          : <MovieDetails fullMovie={movieData!} cast={cast}/>
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: screenHeight * 0.8,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    
    elevation: 20,
  },
  imagePoster: {
    flex: 1
  },
  dataContainer: {
    padding: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000'
  },
  subtitle: {
    fontSize: 16,
    color: '#777'
  },
})

export default Details