import React, { useRef } from 'react'
import { Animated, Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

const FadeAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    const FadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }

    const FadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }

    return (
        <View style={{
            ...styles.container, 
            justifyContent: 'center', 
            alignItems:'center',
            }}>
            <Text style={styles.title}>
                Fade Animation
            </Text>
            <Animated.View style={{
                ...styles.box,
                opacity,
                }} />

            <Button 
                title='Fade in'
                onPress={ FadeIn }
                />
            <Button 
                title='Fade out'
                onPress={ FadeOut }
                />
        </View>
    )
}

export default FadeAnimation
