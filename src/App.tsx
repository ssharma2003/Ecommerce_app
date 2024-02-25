import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainContainer from './MainContainer';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';


const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
