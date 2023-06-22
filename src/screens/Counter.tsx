import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Counter: {counter}
            </Text>
            <TouchableOpacity
                onPress={() => setCounter(counter-1)}
                style={styles.buttonBottomLeft}
            >
                <View style={styles.floatingButton}>
                    <Text style={styles.floatingButtonText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setCounter(counter+1)}
                style={styles.buttonBottomRight}
            >
                <View style={styles.floatingButton}>
                    <Text style={styles.floatingButtonText}>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: "#000"
    },
    buttonBottomLeft: {
        position: 'absolute',
        bottom: 20,
        left: 20
    },
    buttonBottomRight: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    floatingButton: {
        backgroundColor: '#000',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    floatingButtonText: {
        color: '#FFF',
        fontSize: 25,
        alignSelf: 'center'
    }
});

export default Counter
