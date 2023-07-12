import React from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../theme/appTheme';

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const PurpleButton = ({title, onPress, style = {}}: Props) => {
    return (
        <TouchableOpacity
            style={{...globalStyles.button, ...style as any}}
            onPress={onPress}>
                <Text style={globalStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PurpleButton
