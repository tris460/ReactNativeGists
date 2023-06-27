import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const screenDimensions = Dimensions.get('window');

const Dimentions = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Dimensiones </Text>
        <Text style={styles.text}>Dimensiones de la pantalla sin hook: {"\n"}w: {screenDimensions.width}, h: {screenDimensions.height}</Text>
        <Text style={styles.text}>Dimensiones de la pantalla con hook: {"\n"}w: {width}, h: {height}</Text>
        <Text style={styles.text}>50 puntos de alto por 70 puntos de ancho</Text>
        <View style={styles.containerPoints}>
            <Text style={styles.textMeasures}>50x70</Text>
        </View>
        <Text style={styles.text}>25% de alto por 50% de ancho respecto al elemento padre</Text>
        <View style={styles.containerPercentage}>
            <Text style={styles.textMeasures}>{height/4} x {width/2}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000',
        paddingHorizontal: 10,
    },
    text: {
        paddingTop: 20,
        color: '#000',
    },
    textMeasures: {
        color: '#fff',
        textAlign: 'center'
    },
    containerPoints: {
        justifyContent: 'center',
        backgroundColor: '#0d6145',
        height: 50,
        width: 70,
    },
    containerPercentage: {
        justifyContent: 'center',
        backgroundColor: '#3e0d61',
        height: '25%', 
        width: '50%',
    }
})

export default Dimentions
