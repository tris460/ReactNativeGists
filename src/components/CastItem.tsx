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
            {
                actor.profile_path && (
                    <Image
                        source={{uri}}
                        style={styles.image} />
                )
            }
            <View style={{marginStart: 10}}>
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
        backgroundColor:'#fff',
        elevation: 5,
        paddingVertical: 5,
        borderRadius: 50,
        paddingEnd: 15,
        marginHorizontal: 5,
        marginBottom: 20
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 40,
    }
})

export default CastItem
