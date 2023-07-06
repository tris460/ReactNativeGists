import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    actor: Cast
}

const CastItem = ({actor}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            <Image
                source={{uri}}
                style={styles.image} />
            <View>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                    {actor.name}
                </Text>
                <Text style={{}}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f00',
        paddingVertical: 5,
        borderRadius: 50
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginEnd: 10
    }
})

export default CastItem
