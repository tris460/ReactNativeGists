import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatListItem, ItemSeparator } from '../component/FlatListItem';

const menuItems = [
    {
        name: 'Fade Animation',
        icon: 'albums-outline',
        components: 'FadeAnimation'
    },
    {
        name: 'Bounce Animation',
        icon: 'contract-outline',
        components: 'FadeAnimation'
    }
];

const Home = () => {

    return (
        <SafeAreaView style={{flex: 1, ...styles.container}}>
            <Text style={styles.title}>
                Menu
            </Text>
            <FlatList 
                data={menuItems}
                keyExtractor={(item) => item.name}
                renderItem={({item, index}) => <FlatListItem menuItem={item} />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </SafeAreaView>
    )
}

export default Home
