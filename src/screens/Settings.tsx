import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Settings
            </Text>
            <Text style={styles.subtitle}>
                Theme
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    Light/Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen
