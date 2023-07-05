import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import useMovies from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';

const Home = () => {
    const {movies, isLoading} = useMovies();
    const { top } = useSafeAreaInsets();

    if(isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator color="#000" size={50}/>
            </View>
        )
    }

    return (
        <View style={{marginTop: top + 15}}>
            <MoviePoster movie={movies[0]} />
        </View>
    )
}

export default Home
