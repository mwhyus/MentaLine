import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GetStarted, Splash } from './pages'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
          <GetStarted />
    </NavigationContainer>
     
  )
}

const styles = StyleSheet.create({})
