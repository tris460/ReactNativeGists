import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../context/theme/ThemeContext'

const SettingsScreen = () => {
    const {setDarkTheme} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Settings
            </Text>
            <Text style={styles.subtitle}>
                Theme
            </Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={setDarkTheme}>
                <Text style={styles.textButton}>
                    Light/Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen
