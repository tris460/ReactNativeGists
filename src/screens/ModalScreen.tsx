import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Modal Screen
            </Text>
            <Button
                title='Show modal'
                onPress={() => setIsVisible(true)}
                />

            <Modal
                animationType='slide'
                visible={isVisible}
                transparent
                >
                    <View style={{flex:1, backgroundColor:'#7775', justifyContent: 'center'}}>
                        <View style={{backgroundColor: '#fff', margin: 20, padding: 20}}>
                            <Text style={styles.subtitle}>
                                Modal title
                            </Text>
                            <Text style={{...styles.switchText, marginBottom: 20}}>
                                Modal body
                            </Text>
                            <Button
                                title='Close modal'
                                onPress={() => setIsVisible(false)}
                                />
                        </View>
                    </View>
            </Modal>
        </View>
    )
}

export default ModalScreen
