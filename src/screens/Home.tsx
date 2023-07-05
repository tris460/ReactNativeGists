import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import movieDb from '../api/movieDb'

const Home = () => {
    useEffect(() => {
        movieDb.get('/now_playing')
        .then(res => console.log(res.data))
    })

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home
