import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PermissionsScreen from '../screens/PermissionsScreen';
import MapScreen from '../screens/MapScreen';
import { PermissionsContext } from '../context/PermissionContext';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    const {permissions} = useContext(PermissionsContext);

    if(permissions.locationStatus === 'unavailable') {
        return <LoadingScreen />
    }

    return (
        <Stack.Navigator
            initialRouteName='PermissionsScreen'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#000'
                }
            }}>
            {
                (permissions.locationStatus === 'granted') ?
                <Stack.Screen name='MapScreen' component={MapScreen} /> :
                <Stack.Screen name='PermissionsScreen' component={PermissionsScreen} />
            }
        </Stack.Navigator>
    )
}

export default StackNavigation
