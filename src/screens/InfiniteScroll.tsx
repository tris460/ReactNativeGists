import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Title from '../component/Title';

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
            <Title text='Infinite Scroll' />
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => renderItem(item)}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={40} color={'#000'} />
                    </View>
                )}
                />
        </View>
    )
}

export default InfiniteScroll
