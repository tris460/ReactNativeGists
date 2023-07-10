import React from 'react'
import { Animated, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useAnimation } from '../hooks/useAnimation'
import { TouchableOpacity } from 'react-native-gesture-handler'

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

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{...styles.button, marginEnd: 10}}
                    onPress={ FadeIn }
                    >
                    <Text style={styles.textButton}>
                        Fade in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={ FadeOut }
                    >
                    <Text style={styles.textButton}>
                        Fade out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FadeAnimation
