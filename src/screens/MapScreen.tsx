import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../theme/appTheme'

const MapScreen = () => {
    return (
        <View style={globalStyles.alignCenter}>
            <Text style={globalStyles.title}>Map</Text>
            <Text style={globalStyles.data}>You have accepted the location permission</Text>
        </View>
    )
}

export default MapScreen
