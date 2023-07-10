import React, { useState } from 'react'
import { Switch } from 'react-native'

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

const SwitchComponent = ({isOn, onChange}: Props) => {
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    };

    return (
        <Switch
            trackColor={{false: '#999', true: '#c9c'}}
            thumbColor={isEnabled ? '#f9c' : '#ddd'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

export default SwitchComponent
