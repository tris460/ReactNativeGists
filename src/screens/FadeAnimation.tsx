import React from 'react'
import { Animated, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useAnimation } from '../hooks/useAnimation'
import Title from '../component/Title'
import ButtonComponent from '../component/ButtonComponent'

const FadeAnimation = () => {
    const {FadeIn, FadeOut, opacity} = useAnimation();
    return (
        <View style={{
            ...styles.container, 
            justifyContent: 'center', 
            alignItems:'center',
            }}>
            <Title text='Fade Animation' />
            <Animated.View style={{
                ...styles.box,
                opacity,
                }} />

            <View style={{flexDirection: 'row'}}>
                <ButtonComponent onPress={FadeIn} title='Fade in' btnStyles={{marginEnd: 10}}/>
                <ButtonComponent onPress={FadeOut} title='Fade out' />
            </View>
        </View>
    )
}

export default FadeAnimation
