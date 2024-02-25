import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { create } from 'react-test-renderer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import Home from './screens/Home'
import Signup from './screens/Signup'

// const navigation = useNavigation();
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name='Splash' component={Splash} /> */}
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Navigator

const styles = StyleSheet.create({})