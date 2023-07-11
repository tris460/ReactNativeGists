import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: '#fff'}}
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#f00',
            tabBarInactiveTintColor: '#000',
            tabBarLabelStyle: {
                marginBottom: 5,
            },
            tabBarStyle: {
                elevation: 0,
            },
        }}
         >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                tabBarLabel: 'Pokemon',
                tabBarIcon: (({color}) => (
                    <View style={{ transform: [{ rotate: '90deg' }] }}>
                        <Icon 
                            color={color} 
                            size={20} 
                            name="contrast-outline" />
                    </View>
                ))
            }}/>
        <Tab.Screen 
            name="SearchScreen" 
            component={SearchScreen} 
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: (({color}) => 
                    <Icon 
                        color={color} 
                        size={20} 
                        name="search-outline" />)
            }}/>
    </Tab.Navigator>
  );
}