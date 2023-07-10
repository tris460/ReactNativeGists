import React from 'react'
import { Alert, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Title from '../component/Title'
import ButtonComponent from '../component/ButtonComponent'

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
            <ButtonComponent onPress={showAlert} title='Show alert' />
        </View>
    )
}

export default AlertScreen
