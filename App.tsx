import React from 'react'
//import HelloWorld from './src/screens/HelloWorld'
//import Counter from './src/screens/Counter'
//import BoxObjectModel from './src/screens/BoxObjectModel'
import { SafeAreaView, StatusBar } from 'react-native'
import Calculator from './src/screens/Calculator'
import styles from './src/theme/calculatorTheme'
//import Dimentions from './src/screens/Dimentions'
//import Position from './src/screens/Position'

const App = () => {
  return (
    <SafeAreaView style={ styles.container }>
      <StatusBar 
        backgroundColor={"#000"}
        barStyle={'light-content'}/>
      {/* <HelloWorld />
      <Counter /> 
      <BoxObjectModel />
      <Dimentions />
      <Position />*/}
      <Calculator />
    </SafeAreaView>
  )
}

export default App
