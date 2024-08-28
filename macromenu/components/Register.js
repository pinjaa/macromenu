import React, { useState } from 'react';
import {Text, View, Pressable, Alert, TextInput } from 'react-native';
import styles from '../styles/style';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const checkInformation = () => {
    if(!email) {
      Alert.alert('Email is required');
    }
    if(!username) {
      Alert.alert('Username is required');
    }
    if(!password) {
      Alert.alert('Password is required');
    }
    if(!confirmPassword) {
      Alert.alert('Confirm password!');
    }
    if(confirmPassword !== password) {
      Alert.alert('Passwords do not match!');
    }
  }

  return (
    <View>
      <Text>Register</Text>
      <TextInput 
        style={styles.input}
        placeholder='Enter your email'
        value={email}
        onChangeText={(email) => setEmail(email.trim())} 
      />
      <TextInput 
        style={styles.input}
        placeholder='Enter a username'
        value={username}
        onChangeText={(username) => setUsername(username.trim())} 
      />
      <TextInput 
        style={styles.input}
        placeholder='Enter a password'
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <TextInput 
        style={styles.input}
        placeholder='Confirm password'
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        secureTextEntry={true}
      />

      <View style={[{flex: 1},{alignItems:'center'}]}>
        <Pressable onPress={() => checkInformation()} style={styles.button}>
          <Text>REGISTER</Text>
        </Pressable>
        <Text>Already have an account?</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
    
  )
}
