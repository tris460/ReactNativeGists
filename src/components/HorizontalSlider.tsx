import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[]
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: 215}}>
        <Text style={styles.title}>
            {title}
        </Text>
        <FlatList
            data={movies}
            renderItem={({item}: any) => <MoviePoster movie={item} height={150} width={100} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false} />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 20,
        padding: 10
    }
})

export default HorizontalSlider
