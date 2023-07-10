import React, { useContext, useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
    title?: string;
}

const SwitchComponent = ({isOn, onChange, title}: Props) => {
    const {theme: {colors}} = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    };

    return (
        <View style={styles.switchContainer}>
            <Text style={{...styles.switchText, color: colors.text}}>{title}</Text>
            <Switch
                trackColor={{false: '#999', true: '#c9c'}}
                thumbColor={isEnabled ? '#f9c' : '#ddd'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default SwitchComponent
