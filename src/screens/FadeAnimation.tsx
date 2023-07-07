import React, { useRef } from 'react'
import { Animated, Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useAnimation } from '../hooks/useAnimation'

const FadeAnimation = () => {
    const {FadeIn, FadeOut, opacity} = useAnimation();
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
