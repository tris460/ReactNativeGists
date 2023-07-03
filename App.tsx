import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigator } from './src/navigation/TabsNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <TabsNavigator />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App