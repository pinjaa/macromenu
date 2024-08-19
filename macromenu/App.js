import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import AddFood from './components/AddFood';
import Login from './components/Login';
import BottomNav from './components/BottomNav';
import styles from './styles/style.js';

const Stack = createStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator
            initialRouteName='BottomNav'
            screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddFood" component={AddFood} />
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}


