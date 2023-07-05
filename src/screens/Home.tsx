import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import useMovies from '../hooks/useMovies'

const Home = () => {
    const {movies, isLoading} = useMovies();
    console.log(movies[0]?.title)

    if(isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator color="#000" size={50}/>
            </View>
        )
    }
    
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home
