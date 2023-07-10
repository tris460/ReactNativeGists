import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { Text } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    onPress: () => void;
    title: string;
    btnStyles?: any;
    icon?: string;
}

const ButtonComponent = ({onPress, title, btnStyles, icon}: Props) => {
    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <TouchableOpacity 
            style={{...styles.button, backgroundColor: colors.primary, ...btnStyles}}
            onPress={onPress}
            >
            <Text style={styles.textButton}>
                {title}
            </Text>
            {icon &&
                <Icon 
                    name={icon}
                    color='#000'
                    size= {20} />}
        </TouchableOpacity>
    )
}

export default ButtonComponent
