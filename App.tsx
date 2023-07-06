import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';
import Fade from './src/screens/Fade';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <Fade/>
    </NavigationContainer>
  )
}

export default App
