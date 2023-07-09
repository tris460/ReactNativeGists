import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home";
import FadeAnimation from "../screens/FadeAnimation";
import BounceAnimation from "../screens/BounceAnimation";
import Switch from "../screens/Switch";
import AlertScreen from "../screens/AlertScreen";
import TextInputScreen from "../screens/TextInputScreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FadeAnimation" component={FadeAnimation} />
        <Stack.Screen name="BounceAnimation" component={BounceAnimation} />
        <Stack.Screen name="Switch" component={Switch} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
