import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Position = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRelative}>
        <Text style={styles.title}>
            Posición relativa
        </Text>
        <View style={[styles.box, styles.relative]}>
            <Text style={styles.data}>
                Top: 90
            </Text>
            <Text style={styles.data}>
                Bottom: 0
            </Text>
            <Text style={styles.data}>
                Right: 0
            </Text>
            <Text style={styles.data}>
                Left: 10
            </Text>
        </View>
      </View>
      <View style={styles.containerAbsolute}>
        <Text style={styles.title}>
            Posición absoluta
        </Text>
         <View style={[styles.box, styles.absolute]}>
            <Text style={styles.data}>
                Top: 60
            </Text>
            <Text style={styles.data}>
                Bottom: 0
            </Text>
            <Text style={styles.data}>
                Right: 50
            </Text>
            <Text style={styles.data}>
                Left: 0
            </Text>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    containerRelative: {
        backgroundColor: '#7e74ed',
        height: '50%',
    },
    containerAbsolute: {
        backgroundColor: '#cf74ed',
        height: '50%',
    },
    title: {
        padding: 10,
        fontSize: 18,
        color: '#000',
        textAlign: 'center'
    },
    data: {
        padding: 5,
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    box: {
        width: 130,
        backgroundColor: '#000'
    },
    relative: {
        position: 'relative',
        top: 90,
        bottom: 0,
        right: 0,
        left: 10
    },
    absolute: {
        position: 'absolute',
        top: 60,
        right: 50,
    },
})

export default Position
