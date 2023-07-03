import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BoxObjectModel from '../screens/BoxObjectModel';
import Counter from '../screens/Counter';
import Dimentions from '../screens/Dimentions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native';

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TopTab.Navigator 
        style={{paddingTop: top}}
        sceneContainerStyle={{backgroundColor: '#fff'}}
        screenOptions={({route }) => ({
            tabBarPressColor: '#9132a8', // Android
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {backgroundColor: '#9132a8'},
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch(route.name) {
                    case 'BoxObjectModel':
                        iconName='BOM'
                        break;
                    case 'Counter':
                        iconName='CO'
                        break;
                    case 'Dimentions':
                        iconName='DM'
                        break;
                }
                return <Text style={{color}}>{iconName}</Text>
            }
        })}
    >
      <TopTab.Screen name="BoxObjectModel" component={BoxObjectModel} />
      <TopTab.Screen name="Counter" component={Counter} />
      <TopTab.Screen name="Dimentions" component={Dimentions} />
    </TopTab.Navigator>
  );
}