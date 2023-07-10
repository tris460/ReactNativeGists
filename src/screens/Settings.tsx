import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/theme/ThemeContext'
import Title from '../component/Title'
import ButtonComponent from '../component/ButtonComponent'

const SettingsScreen = () => {
    const { setDarkTheme, setLightTheme } = useContext(ThemeContext);
    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Title text='Settings' />
            <Text style={{...styles.subtitle, color: colors.text}}>
                Theme
            </Text>
            <ButtonComponent onPress={setLightTheme} title='Light' btnStyles={{marginBottom: 5}}/>
            <ButtonComponent onPress={setDarkTheme} title='Dark' />
        </View>
    )
}

export default SettingsScreen
