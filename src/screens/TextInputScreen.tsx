import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TextInput } from 'react-native-gesture-handler'

const TextInputScreen = () => {
    const [number, setNumber] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Text Input
            </Text>
            <Text style={{fontSize: 18, color: '#000', textAlign: 'center', marginTop: 15}}>
                {number}
            </Text>
            <TextInput
                style={{
                    borderColor: '#999', 
                    borderWidth: 2, 
                    fontSize: 20,
                    marginTop: 20,
                    padding: 10,
                    textAlign: 'center',
                    borderRadius: 10,
                }}
                onChangeText={setNumber}
                value={number}
                placeholder="Write a number"
                keyboardType="numeric"
            />
        </View>
    )
}

export default TextInputScreen
