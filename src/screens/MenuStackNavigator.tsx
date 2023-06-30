import React from 'react'
import { Button, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}

const MenuStackNavigator = ({navigation}: Props) => {
  return (
    <View>
        <Button
            title='Ir a Box Object Model'
            onPress={() => {navigation.navigate('BoxObjectModel')}} />
        <Button
            title='Ir a Calculator'
            onPress={() => {navigation.navigate('Calculator')}} />
        <Button
            title='Ir a Counter'
            onPress={() => {navigation.navigate('Counter')}} />
        <Button
            title='Ir a Dimensions'
            onPress={() => {navigation.navigate('Dimensions')}} />
        <Button
            title='Ir a HelloWorld'
            onPress={() => {navigation.navigate('HelloWorld')}} />
        <Button
            title='Ir a Position'
            onPress={() => {navigation.navigate('Position')}} />
    </View>
  )
}

export default MenuStackNavigator
