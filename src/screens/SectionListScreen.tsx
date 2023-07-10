import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import Title from '../component/Title';
import { ThemeContext } from '../context/theme/ThemeContext';

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
    const {theme: {colors}} = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Title text='Section list' />
            <SectionList
                sections={ houses }
                keyExtractor={(item) => item}
                stickySectionHeadersEnabled
                renderItem={({item}) => (
                    <Text style={{...styles.switchText, color: colors.text}}>
                        {item}
                    </Text>)}
                renderSectionHeader={({section}) => (
                    <Text style={{...styles.subtitle, color: colors.text}}>
                        {section.house}
                    </Text>)}
                />
        </View>
    )
}

export default SectionListScreen
