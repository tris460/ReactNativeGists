import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParams = {
    HomeScreen: undefined;
    PokemonScreen: {simplePokemon: SimplePokemon};
    SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fff'
                }
            }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation
