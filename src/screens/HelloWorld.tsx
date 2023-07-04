import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const HelloWorld = () => {
  const {authState, signIn} = useContext(AuthContext);

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
        {authState.isLoggedIn && <Button title='Sign in' onPress={signIn} />}
      </View>
    )
}

export default HelloWorld;
