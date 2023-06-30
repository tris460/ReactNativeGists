import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BoxObjectModel from '../screens/BoxObjectModel';
import Calculator from '../screens/Calculator';
import Counter from '../screens/Counter';
import HelloWorld from '../screens/HelloWorld';
import Position from '../screens/Position';
import Dimentions from '../screens/Dimentions';
import MenuStackNavigator from '../screens/MenuStackNavigator';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuStackNavigator} />
        <Stack.Screen name="BoxObjectModel" component={BoxObjectModel} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Dimentions" component={Dimentions} />
        <Stack.Screen name="HelloWorld" component={HelloWorld} />
        <Stack.Screen name="Position" component={Position} />
    </Stack.Navigator>
  );
}