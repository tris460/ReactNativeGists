import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { globalStyles } from '../theme/appTheme'

const LoadingScreen = () => {
    return (
        <View style={globalStyles.alignCenter}>
            <ActivityIndicator size={50} color={'#991893'}/>
        </View>
    )
}

export default LoadingScreen
