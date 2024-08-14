import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddFood from './components/AddFood';
import Login from './components/Login';
import BottomNav from './components/BottomNav';
import styles from './styles/style.js';

export default function App() {
  return (
    <View>
      <Router>
        <StatusBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addfood" element={<AddFood />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </View>
    
    
  );
}


