import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoxObjectModel from '../screens/BoxObjectModel';
import Calculator from '../screens/Calculator';
import Counter from '../screens/Counter';
import Dimentions from '../screens/Dimentions';
import HelloWorld from '../screens/HelloWorld';
import MenuStackNavigator from '../screens/MenuStackNavigator';
import Position from '../screens/Position';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen name="MenuStackNavigator" options={{ title: 'Menu' }} component={MenuStackNavigator} />
      <Tab.Screen name="BoxObjectModel" component={BoxObjectModel} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Counter" component={Counter} />
      <Tab.Screen name="Dimentions" component={Dimentions} />
      <Tab.Screen name="HelloWorld" component={HelloWorld} />
      <Tab.Screen name="Position" component={Position} />
    </Tab.Navigator>
  );
}