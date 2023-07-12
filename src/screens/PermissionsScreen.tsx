import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { PermissionsContext } from '../context/PermissionContext';
import { globalStyles } from '../theme/appTheme';
import PurpleButton from '../components/PurpleButton';

const PermissionsScreen = () => {
    const { permissions, askLocationPermission } = useContext(PermissionsContext);

    return (
        <View style={globalStyles.alignCenter}>
            <Text style={globalStyles.title}>Permissions</Text>
            <PurpleButton title='Location permission' onPress={askLocationPermission} />
            <Text style={globalStyles.data}>
                {JSON.stringify(permissions, null, 3)}
            </Text>
        </View>
    )
}

export default PermissionsScreen
