import React, { useContext } from 'react'
import { Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/theme/ThemeContext'

interface Props {
    text: string,
}

const Title = ({text}: Props) => {
    const {theme: {colors}} = useContext(ThemeContext);
    return (
        <Text style={{...styles.title, color: colors.text}}>
            {text}
        </Text>
    )
}

export default Title
