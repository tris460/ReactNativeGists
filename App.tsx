import React from 'react'
import Navigator from './src/navigation/Navigator'
import { ThemeProvider } from './src/context/theme/ThemeContext'

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}
const AppState = ({children}: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App
