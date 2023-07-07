import React from 'react'
import { View } from 'react-native'
import { styles } from '../theme/appTheme'

const BounceAnimation = () => {
    return (
        <View style={{
            ...styles.container, 
            justifyContent: 'center', 
            alignItems:'center'}}>
            <View style={styles.box} />
        </View>
    )
}

export default BounceAnimation
