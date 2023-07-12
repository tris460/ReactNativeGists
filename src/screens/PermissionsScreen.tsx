import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { PermissionsContext } from '../context/PermissionContext';

const PermissionsScreen = () => {
    const { permissions, askLocationPermission } = useContext(PermissionsContext);

    return (
        <View style={styles.container}>
            <Text style={{color:'#fff'}}>Permissions</Text>
            <Icon name="rocket" size={30} color="#900" />
            <TouchableOpacity
                style={styles.button}
                onPress={askLocationPermission}>
                    <Text style={styles.buttonText}>Permiso de localizacion</Text>
            </TouchableOpacity>
            <Text style={{color:'#fff'}}>
                {JSON.stringify(permissions, null, 3)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#991893',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
})

export default PermissionsScreen
