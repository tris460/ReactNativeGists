import React, { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import SwitchComponent from '../component/SwitchComponent'
import Title from '../component/Title'
import { ThemeContext } from '../context/theme/ThemeContext'

const SwitchScreen = () => {
    const {theme: {colors}} = useContext(ThemeContext);
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
            <SwitchComponent isOn={false} onChange={(value) => onChange(value, 'isActive')} title='isActive'/>
            <SwitchComponent isOn={false} onChange={(value) => onChange(value, 'isHungry')} title='isHungry'/>
            <SwitchComponent isOn={false} onChange={(value) => onChange(value, 'isHappy')} title='isHappy'/>
            <Text style={styles.subtitle}>Data:</Text>
            <Text style={{color: colors.text, ...styles.json}}>
                {JSON.stringify(state, null, 4)}
            </Text>
        </View>
    )
}

export default SwitchScreen
