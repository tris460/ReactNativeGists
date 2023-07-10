import React from 'react'
import { Alert, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Title from '../component/Title'

const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            "Title",
            "Message",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancelled'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK'),
                }
            ],
            {
                cancelable: true
            }
        )
    }

    return (
        <View style={styles.container}>
            <Title text='Alert' />
            <TouchableOpacity style={{...styles.button}}
                onPress={ showAlert }
                >
                <Text style={styles.textButton}>
                    Show alert
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AlertScreen
