import React, { useState } from 'react';
import {Text, View, Alert, ScrollView, SectionList } from 'react-native';
import styles from '../styles/style.js';
import AddFoodForm from './AddFoodForm.js';
import FoodList from './FoodList.js';

export default function AddFood() {

  const [foods, setFoods] = useState([]);
  //const [goals, setGoals] = useState({ protein: 150, carbs: 200, fats: 70 });

  const addFoodToList = (food) => {
    if(food) 
    {
      Alert.alert('Food Added', food.name);
      setFoods([...foods, food]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Food Tracker</Text>
        <AddFoodForm addFood={addFoodToList} />
      </View>
      <View style={styles.listContainer}>
        <FoodList foods={foods} />
      </View>
    </View>
  );
}