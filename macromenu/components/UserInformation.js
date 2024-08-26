import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useMemo } from 'react';
import {Text, View, TextInput, Pressable } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';


export default function UserInformation() {
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState();
  const [selectedId, setSelectedId] = useState();

  //https://www.npmjs.com/package/react-native-radio-buttons-group
  const radioButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Male',
      value: 'male'
    },
    {
      id: '2',
      label: 'Female',
      value: 'female'
    },
    {
      id: '3',
      label: 'Else',
      value: 'else'
    }
  ]), []);

  const handleSave = async () => {
    if(age > 0 && age < 100) {
      await AsyncStorage.setItem('age', age);
    }
    if(weight > 0) {
      await AsyncStorage.setItem('weight', weight);
    }
    if(height > 0 && height < 210) {
      await AsyncStorage.setItem('height', height);
    }
    if(selectedId) {
      switch (selectedId) {
        case 1:
          setSex('male')
          break;
        case 2:
          setSex('female')
          break;
        case 3: 
          setSex('else')
          break;
        default:
          break;
      }
      await AsyncStorage.setItem('sex', sex);
    }
  }

  return (
    <View>
      <Text>User Information</Text>
      <TextInput 
        keyboardType='numeric'
        placeholder='Enter your age'
        value={age}
        onChangeText={(age) => setAge(age)} 
      />
      <RadioGroup 
        radioButtons={radioButtons} 
        onPress={setSelectedId}
        selectedId={selectedId}
      />
      <TextInput 
        keyboardType='numeric'
        placeholder='Enter your weight'
        value={weight}
        onChangeText={(weight) => setWeight(weight)} 
      />
      <TextInput 
        keyboardType='numeric'
        placeholder='Enter your height'
        value={height}
        onChangeText={(height) => setHeight(height)} 
      />
      <Pressable onPress={() => handleSave}>
        <Text>SAVE</Text>
      </Pressable>
    </View>
  )
}
