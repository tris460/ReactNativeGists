import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

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
            <Text style={styles.title}>
                Alert
            </Text>
            <Button
                title='Show alert'
                onPress={showAlert}
                />
        </View>
    )
}

export default AlertScreen
