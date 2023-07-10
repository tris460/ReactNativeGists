import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { FlatListItemInterface } from '../interfaces/appInterfaces'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    menuItem:  FlatListItemInterface;
}

export const FlatListItem = ({menuItem}: Props) => {
    const navigation = useNavigation();
    const {theme} = useContext(ThemeContext);

    return (
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component as never)}>
            <View style={{flexDirection: 'row'}}>
                <Icon 
                    name={menuItem.icon}
                    color={theme.colors.primary}
                    size={22}
                />
                <Text style={{...style.titleItem, color: theme.colors.text}}>
                    {menuItem.name}
                </Text>
                <View style={{flex: 1}} />
                <Icon 
                    name='chevron-forward-outline'
                    color={theme.colors.primary}
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
        marginStart: 12,
        color: '#000'
    },
})
