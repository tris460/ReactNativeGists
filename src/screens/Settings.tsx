import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ThemeContext } from '../context/theme/ThemeContext'
import Title from '../component/Title'

const SettingsScreen = () => {
    const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Title text='Settings' />
            <Text style={styles.subtitle}>
                Theme
            </Text>
            <TouchableOpacity 
                style={{...styles.button, marginBottom: 5}}
                onPress={setLightTheme}>
                <Text style={styles.textButton}>
                    Light
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={setDarkTheme}>
                <Text style={styles.textButton}>
                    Dark
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SettingsScreen
