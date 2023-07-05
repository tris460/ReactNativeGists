import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import useMovies from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';

const Home = () => {
    const {movies, isLoading} = useMovies();
    const { top } = useSafeAreaInsets();
    const { width } = Dimensions.get('window');

    if(isLoading) {
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator color="#000" size={50}/>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{marginTop: top + 15}}>
                <View style= {{height: 320}}>
                    <Carousel
                        data = {movies}
                        renderItem={({item}: any) => <MoviePoster movie={item} />}
                        sliderWidth={width}
                        itemWidth={220} />
                </View>

                <View style={{height: 215}}>
                    <Text style={styles.title}>
                        New
                    </Text>
                    <FlatList
                        data={movies}
                        renderItem={({item}: any) => <MoviePoster movie={item} height={150} width={100} />}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 20,
        padding: 10
    }
})
export default Home
