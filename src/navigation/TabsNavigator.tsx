import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoxObjectModel from '../screens/BoxObjectModel';
import Calculator from '../screens/Calculator';
import Counter from '../screens/Counter';
import Dimentions from '../screens/Dimentions';
import HelloWorld from '../screens/HelloWorld';
import MenuStackNavigator from '../screens/MenuStackNavigator';
import Position from '../screens/Position';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';

const BottomTabIOS = createBottomTabNavigator();
const BottomTabAndroid = createMaterialBottomTabNavigator();
    
const TabsNavigatorIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{ backgroundColor: '#fff' }}
        screenOptions={({route}) => ({
            tabBarActiveTintColor: '#9132a8',
            tabBarStyle: {borderTopColor: 'red'},
            tabBarLabelStyle: {fontSize: 14},
            tabBarIcon: ({color, focused, size}) => {
                let iconName: string = '';
                switch(route.name) {
                    case 'MenuStackNavigator':
                        iconName='MSN'
                        break;
                    case 'BoxObjectModel':
                        iconName='BOM'
                        break;
                    case 'Calculator':
                        iconName='Ca'
                        break;
                    case 'Counter':
                        iconName='Co'
                        break;
                    case 'Dimentions':
                        iconName='Di'
                        break;
                    case 'HelloWorld':
                        iconName='HW'
                        break;
                    case 'Position':
                        iconName='Po'
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
        >
      <BottomTabIOS.Screen name="MenuStackNavigator" options={{ title: 'Menu' }} component={MenuStackNavigator} />
      <BottomTabIOS.Screen name="BoxObjectModel" component={BoxObjectModel} />
      <BottomTabIOS.Screen name="Calculator" component={Calculator} />
      <BottomTabIOS.Screen name="Counter" component={Counter} />
      <BottomTabIOS.Screen name="Dimentions" component={Dimentions} />
      <BottomTabIOS.Screen name="HelloWorld" component={HelloWorld} />
      <BottomTabIOS.Screen name="Position" component={Position} />
    </BottomTabIOS.Navigator>
  );
}

const TabsNavigatorAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        barStyle = {{
            backgroundColor: '#a86d93',
        }}
        activeColor='#1600de'
        inactiveColor='#fff'
        screenOptions={({route}) => ({
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch(route.name) {
                    case 'MenuStackNavigator':
                        iconName='MSN'
                        break;
                    case 'BoxObjectModel':
                        iconName='BOM'
                        break;
                    case 'Calculator':
                        iconName='Ca'
                        break;
                    case 'Counter':
                        iconName='Co'
                        break;
                    case 'Dimentions':
                        iconName='Di'
                        break;
                    case 'HelloWorld':
                        iconName='HW'
                        break;
                    case 'Position':
                        iconName='Po'
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
    >
        <BottomTabAndroid.Screen name="MenuStackNavigator" options={{ title: 'Menu' }} component={MenuStackNavigator} />
        <BottomTabAndroid.Screen name="BoxObjectModel" component={BoxObjectModel} />
        <BottomTabAndroid.Screen name="Calculator" component={Calculator} />
        <BottomTabAndroid.Screen name="Counter" component={Counter} />
        <BottomTabAndroid.Screen name="Dimentions" component={Dimentions} />
        <BottomTabAndroid.Screen name="HelloWorld" component={HelloWorld} />
        <BottomTabAndroid.Screen name="Position" component={Position} />
    </BottomTabAndroid.Navigator>
  );
    
}

export const TabsNavigator = () => {
    return (
        Platform.OS === 'ios' ?
            <TabsNavigatorIOS /> : <TabsNavigatorAndroid />
        
    )
}