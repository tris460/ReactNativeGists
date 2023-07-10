import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native'
import React from 'react'
import Navigator from './src/navigation/Navigator'

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    text: '#fff'
  }
}

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigator />
    </NavigationContainer>
  )
}

export default App
