import React, { useState } from 'react'
import { RefreshControl, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'

const PullToRefresh = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Refreshed')
            setRefreshing(false)
        }, 1500);
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    />
            }
            >
            <View style={styles.container}>
                <Text style={styles.title}>
                    Pull to refresh
                </Text>
            </View>    
        </ScrollView>
    )
}

export default PullToRefresh
