import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Title from '../component/Title';

interface Houses {
    house: string;
    data: string[];
}

const houses: Houses[] = [
    {
        house: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin']
    },
    {
        house: 'Marvel',
        data: ['Antman', 'Spiderman', 'Thor']
    },
    {
        house: 'Miraculous',
        data: ['Ladybug', 'Chat Noir', 'Hock Moth']
    }
]

const SectionListScreen = () => {
    return (
        <View style={styles.container}>
            <Title text='Section list' />
            <SectionList
                sections={ houses }
                keyExtractor={(item) => item}
                stickySectionHeadersEnabled
                renderItem={({item}) => <Text style={styles.switchText}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.subtitle}>{section.house}</Text>}
                />
        </View>
    )
}

export default SectionListScreen
