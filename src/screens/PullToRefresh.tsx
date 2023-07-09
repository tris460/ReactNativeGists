import React, { useState } from 'react'
import { RefreshControl, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'

const PullToRefresh = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState('');

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setData('Refreshed');
            setRefreshing(false)
        }, 6000);
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff']}
                    />
            }
            >
            <View style={styles.container}>
                <Text style={styles.title}>
                    Pull to refresh
                </Text>
                {
                    data && <Text style={styles.subtitle}>{data}</Text>
                }
            </View>    
        </ScrollView>
    )
}

export default PullToRefresh