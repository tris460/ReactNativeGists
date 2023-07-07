import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Text style={styles.title}>
                Switch
            </Text>
            <Switch
                trackColor={{false: '#999', true: '#e9e'}}
                thumbColor={isEnabled ? '#a1a' : '#ddd'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default SwitchScreen
