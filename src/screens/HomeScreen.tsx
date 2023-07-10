import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../theme/appTheme';
import usePokemonPaginator from '../hooks/usePokemonPaginator';

const HomeScreen = () => {
    const {simplePokemonList} = usePokemonPaginator();
    console.log(simplePokemonList);
    
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require('../assets/pokeball.png')}
                style={styles.imgBackground}/>
            <View style={styles.titleContainer}>
                <Image 
                    source={require('../assets/pokedex_title.png')}
                    style={styles.titleImage}
                    resizeMode='contain'/>
            </View>
            <Icon name="rocket" size={30} color="#900" />
        </SafeAreaView>
    )
}

export default HomeScreen
