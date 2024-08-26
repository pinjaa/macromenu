import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {Text, View, TextInput, Pressable } from 'react-native';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState();

  useEffect(() => {
    fetchUserInformation();
  }, [])
  
  const fetchUserInformation = async () => {
    const data = await AsyncStorage.multiGet(['username', 'age', 'sex', 'weight', 'height']);
    console.log("async data: " + data);

    setUsername(data[0]);
    setAge(data[1]);
    setSex(data[2]);
    setWeight(data[3]);
    setHeight(data[4]);
  }

  return (
    <View>
      <Text>Profile</Text>
      <Text>Your Information</Text>
      <Text>Username: {username}</Text>
      <Text>Age: {age}</Text>
      <Text>Sex: {sex}</Text>
      <Text>Weight: {weight}</Text>
      <Text>Height: {height}</Text>
    </View>
  )
}
