import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const HelloWorld = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center' }}>
        <Text style={{
            fontSize: 30,
            textAlign: 'center'
          }}>
          Hello World
          </Text>
        <Text>
          {JSON.stringify(authState, null, 4)}
        </Text>
      </View>
    )
}

export default HelloWorld;
