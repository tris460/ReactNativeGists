import React from 'react'
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  return (
    <View style={{flex: 1}}>
        <LinearGradient
            colors={['#f00', '#0f0', '#00f']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x: 0.5, y: 0.0}}
            end={{x: 0.5, y: 0.5}} />
        {children}
    </View>
  )
}

export default GradientBackground
