import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../theme/calculatorTheme'

interface Props {
    text: string;
    textColor?: string;
    color?: string;
    duplicateSize?: boolean;
    action: (arg: string) => void;
}

const CalculatorBtn = (
    {text, 
    textColor = '#fff', 
    color = '#555',
    duplicateSize,
    action}: Props) => {
  return (
    <TouchableOpacity
    onPress={() => action(text)}>
        <View style={{
            ...styles.button, 
            backgroundColor: color,
            width: (duplicateSize) ? 170: 80
            }}>
            <Text style={{
                ...styles.textButton,
                color: textColor,
                }}>
                {text}
            </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CalculatorBtn
