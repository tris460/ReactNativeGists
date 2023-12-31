import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';

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
                    case 'StackNavigator':
                        iconName='MSN'
                        break;
                    case 'TopTabNavigator':
                        iconName='TTN'
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
        >
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Menu' }} component={StackNavigator} />
      <BottomTabIOS.Screen name='TopTabNavigator' component={TopTabNavigator} />
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
                    case 'StackNavigator':
                        iconName='MSN'
                        break;
                    case 'TopTabNavigator':
                        iconName='TTN'
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
    >
        <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Menu' }} component={StackNavigator} />
        <BottomTabAndroid.Screen name='TopTabNavigator' component={TopTabNavigator} />
    </BottomTabAndroid.Navigator>
  );
    
}

export const TabsNavigator = () => {
    return (
        Platform.OS === 'ios' ?
            <TabsNavigatorIOS /> : <TabsNavigatorAndroid />
        
    )
}