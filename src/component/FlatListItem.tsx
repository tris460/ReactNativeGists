import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { FlatListItemInterface } from '../interfaces/appInterfaces'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem:  FlatListItemInterface;
}

export const FlatListItem = ({menuItem}: Props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component as never)}>
            <View style={{flexDirection: 'row'}}>
                <Icon 
                    name={menuItem.icon}
                    color='#000'
                    size={22}
                />
                <Text style={style.titleItem}>
                    {menuItem.name}
                </Text>
                <View style={{flex: 1}} />
                <Icon 
                    name='chevron-forward-outline'
                    color='#000'
                    size={22}
                />
            </View>
        </TouchableOpacity>
    )
}

export const ItemSeparator = () => {
    return (
        <View style={styles.separator} />
    )
}

const style = StyleSheet.create({
    titleItem: {
        fontSize: 16,
        color: '#000',
        marginStart: 12,
    },
})
