import React, { useRef } from 'react'
import { Animated } from 'react-native';

export const useAnimation = () => {
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

    return {FadeIn, FadeOut, opacity}
}
