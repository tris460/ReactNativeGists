import React, { useRef } from 'react'
import { Animated, PanResponder, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

const BounceAnimation = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
        [
            null,
            {
                dx: pan.x,
                dy: pan.y,
            },
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
        Animated.spring(
            pan,
            {toValue: {x: 0, y: 0}, useNativeDriver: false},
        ).start();
        },
    });

    return (
        <View style={{
            ...styles.container, 
            justifyContent: 'center', 
            alignItems:'center'}}>
            <Text style={styles.title}>
                Bounce Animation
            </Text>
            <Animated.View 
                {...panResponder.panHandlers}
                style={[styles.box, pan.getLayout()]} />
        </View>
    )
}

export default BounceAnimation
