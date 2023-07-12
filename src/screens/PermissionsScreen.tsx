import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

const PermissionsScreen = () => {
    const checkLocationPermission = async() => {
        let permissionStatus: PermissionStatus;

        if(Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        console.log(permissionStatus)
    }

    return (
        <View style={styles.container}>
            <Text style={{color:'#fff'}}>Permissions</Text>
            <Icon name="rocket" size={30} color="#900" />
            <TouchableOpacity
                style={styles.button}
                onPress={checkLocationPermission}>
                    <Text style={styles.buttonText}>Permiso de localizacion</Text>
            </TouchableOpacity>
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
