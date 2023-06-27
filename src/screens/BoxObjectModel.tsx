import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        <View style={styles.margin}>
            <Text style={styles.text}>Margen</Text>
            <View style={styles.border}>
                <Text style={[styles.text, styles.white]}>Borde</Text>
                <View style={styles.padding}>
                    <Text style={styles.text}>Padding</Text>
                    <Text style={styles.title}>Box Object Model</Text>
                </View>
            </View>
        </View>
      <View style={styles.data}>
        <Text style={styles.subtitle}>Este elemento tiene</Text>
        <Text style={styles.text}>Alto: El alto que necesite el elemento</Text>
        <Text style={styles.text}>Ancho: El 100% del espacio que puede tomar</Text>
        <Text style={styles.text}>Margen: Azúl de 32 puntos</Text>
        <Text style={styles.text}>Borde: Negro de 16 puntos</Text>
        <Text style={styles.text}>Padding: Verde de 20 puntos</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {},
    data: {
        padding: 10
    },
    title: {
        fontSize: 22,
        color: '#000',
        backgroundColor: '#be5fde',
        textAlign: 'center',
        fontWeight: '900'
    },
    subtitle: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
    margin: {
        backgroundColor: '#59c2f0',
        padding: 32,
        paddingTop: 14,
        margin: 5
    },
    border: {
        backgroundColor: '#000',
        padding: 18,
        paddingTop: 0
    },
    padding: {
        backgroundColor: '#59f05e',
        padding: 20,
        paddingTop: 4
    },
    white: {
        color: '#fff'
    }
});

export default BoxObjectModel
