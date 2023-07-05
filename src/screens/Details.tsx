import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/NavigationStack'
import Icon from 'react-native-vector-icons/Ionicons'

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const Details = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
          <Image 
            source={{uri}}
            style={styles.imagePoster}/>
          <View style={styles.dataContainer}>
            <Text style={styles.title}>{movie.original_title}</Text>
            <Text style={styles.subtitle}>{movie.title}</Text>
            <Icon 
              name="star-outline"
              color="red"
              size={40} />
          </View>
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
