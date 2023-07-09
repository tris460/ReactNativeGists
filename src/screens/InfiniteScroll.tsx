import React, { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

const InfiniteScroll = () => {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const loadMore = () => {
        const newData:number[] = [];
        for (let i = 0; i < 5; i++) {
            newData[i] = numbers.length + i;
        }

        setNumbers([...numbers, ...newData]);
    }

    const renderItem = (item: number) => {
        return (
            <Image
                source={{uri: `https://picsum.photos/id/${item}/500/400`}}
                style={{
                    width: '100%',
                    height: 400,
                }}
                />
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Infinite Scroll
            </Text>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => renderItem(item)}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                />
        </View>
    )
}

export default InfiniteScroll
