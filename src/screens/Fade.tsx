import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import useFade from '../hooks/useFade'

const Fade = () => {
    const {fadeIn, fadeOut, opacity} = useFade();
    return (
        <View style={{
            flex:1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Animated.View style={{
                backgroundColor: 'black',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                opacity
            }} />
            <Button
                title='Start fadeIn' 
                onPress={() => fadeIn()} />
            <Button 
                title='Start fadeOut' 
                onPress={() => fadeOut()} />
        </View>
    )
}

export default Fade
