import React from 'react'
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native'
import useMovies from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

const Home = () => {
    const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
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
        <GradientBackground>
            <ScrollView>
                <View style={{marginTop: top + 15}}>
                    <View style= {{height: 320}}>
                        <Carousel
                            data = {nowPlaying}
                            renderItem={({item}: any) => <MoviePoster movie={item} />}
                            sliderWidth={width}
                            itemWidth={220}
                            inactiveSlideOpacity={0.8} />
                    </View>

                    <HorizontalSlider title='New' movies={nowPlaying} />
                    <HorizontalSlider title='Popular' movies={popular} />
                    <HorizontalSlider title='Top Rated' movies={topRated} />
                    <HorizontalSlider title='Upcoming' movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}

export default Home
