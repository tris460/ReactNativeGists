import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FloatingActionButton from '../components/FloatingActionButton';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Counter: {counter}
            </Text>
            <FloatingActionButton 
                title="+1"
                onPress = { () => setCounter(counter + 1)}
            />
            <FloatingActionButton 
                title="-1"
                position='bl'
                onPress = { () => setCounter(counter - 1)}
            />
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
});

export default Counter
