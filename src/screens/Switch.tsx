import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import SwitchComponent from '../component/SwitchComponent'
import Title from '../component/Title'

const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy: false
    });

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={styles.container}>
            <Title text='Switch' />
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>isActive</Text>
                <SwitchComponent isOn={false} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>isHungry</Text>
                <SwitchComponent isOn={false} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>isHappy</Text>
                <SwitchComponent isOn={false} onChange={(value) => onChange(value, 'isHappy')} />
            </View>
            <Text style={styles.subtitle}>Data:</Text>
            <Text>
                {JSON.stringify(state, null, 4)}
            </Text>
        </View>
    )
}

export default SwitchScreen
