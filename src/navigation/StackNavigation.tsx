import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PermissionsScreen from '../screens/PermissionsScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='PermissionsScreen'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#000'
                }
            }}>
            <Stack.Screen name='PermissionsScreen' component={PermissionsScreen} />
            <Stack.Screen name='MapScreen' component={MapScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
