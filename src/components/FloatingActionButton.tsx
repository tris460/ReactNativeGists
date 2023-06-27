import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

/**
 * Interface for the properties received in props
 */
interface Props {
    title: string;
    onPress: () => void;
    position?: 'br' | 'bl'; //Bottom right: br | Bottom left: bl
}

const FloatingActionButton = (props: Props) => {
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={[
            styles.buttonBottom,
            (props.position === 'bl') 
                ? styles.left
                : styles.right]}
        >
        <View style={styles.floatingButton}>
            <Text style={styles.floatingButtonText}>
                {props.title}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    buttonBottom: {
        position: 'absolute',
        bottom: 20,
    },
    right: {
        right: 20
    },
    left: {
        left: 20
    },
    floatingButton: {
        backgroundColor: '#000',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    floatingButtonText: {
        color: '#FFF',
        fontSize: 25,
        alignSelf: 'center'
    }
});

export default FloatingActionButton
