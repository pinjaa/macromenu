import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import '../styles/BottomNav.css';
import Home from './Home';
import AddFood from './AddFood';
import Login from './Login';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Add Food') {
              iconName = 'plus';
            }
            else if (route.name === 'Login') {
              iconName = 'key';
            }

            // Return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddFood" component={AddFood} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    
  );
}