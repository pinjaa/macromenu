import React, { useState } from 'react';
import {Text, View } from 'react-native';
import styles from '../styles/style.js';
import AddFoodForm from './AddFoodForm.js';
import FoodList from './FoodList.js';

export default function AddFood() {

  const [foods, setFoods] = useState([]);
  //const [goals, setGoals] = useState({ protein: 150, carbs: 200, fats: 70 });

  const addFood = (food) => {

    if(food != null || food != "") 
    {
      setFoods([...foods, food]);
    }
    
  };

  return (
    <div>
      <h1>Food Tracker</h1>
      <AddFoodForm addFood={addFood} />
      <FoodList foods={foods} />
      {/* <GoalTracker foods={foods} goals={goals} /> */}
    </div>
  );
}