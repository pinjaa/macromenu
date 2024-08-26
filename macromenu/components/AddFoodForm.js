import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Text, View, TextInput, Button, Pressable, FlatList } from 'react-native';
import styles from '../styles/AddFoodFormStyle.js';

export default function AddFoodForm({ addFood }) {
  const [foodName, setFoodName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foodOptions, setFoodOptions] = useState([]);
  const [fullFoodList, setFullFoodList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(false);
    setError(null);
    setFoodOptions([]);
    setFullFoodList([]);
    setCurrentPage(1);
    setTotalPages(1);
    setFoodName('');
  }, [])
  

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setFoodOptions([]);

    if(!foodName) {
      setError("Enter food name.")
      return;
    }

    try {
      const response = await axios.get(`https://fineli.fi/fineli/api/v1/foods?q=${foodName}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
        },
      });

      const foodData = response.data;
      if (foodData.length > 0) {
        setFullFoodList(foodData);
        setTotalPages(Math.ceil(foodData.length / itemsPerPage));
        setCurrentPage(1);
        setFoodOptions(foodData.slice(0, itemsPerPage));
      } else {
        setError('No food found with that name.');
      }
    } catch (err) {
      setError('Error fetching food data.');
      console.error('API Fetch Error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    const start = (newPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFoodOptions(fullFoodList.slice(start, end));
    setCurrentPage(newPage);
  };

  const handleSelectFood = (foodItem) => {
    const food = {
      name: foodItem.name.fi,
      kcal: foodItem.energyKcal,
      protein: foodItem.protein,
      carbs: foodItem.carbohydrate,
      fats: foodItem.fat,
    };
    addFood(food);
    setFoodName('');
    setFoodOptions([]);
    setFullFoodList([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.title}>Add a Food Item</Text>
        <TextInput
          style={styles.input}
          value={foodName}
          onChangeText={setFoodName}
          placeholder="Enter food name..."
        />
        
        {error && <Text style={styles.errorText}>{error}</Text>}
      
        <Pressable
          onPress={handleSubmit}
          style={[styles.button]}>
          <Text style={styles.buttonTextSettings}>SEARCH</Text>
        </Pressable>
      </View>
      

      {foodOptions.length > 0 && (
        <View>
          <FlatList
            data={foodOptions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.foodItem}>
                <Text
                  style={styles.foodText}
                  onPress={() => handleSelectFood(item)}
                >
                  <Text style={styles.foodName}>{item.name.fi}</Text> - Kcal: {item.energyKcal.toFixed(0)} kcal, 
                  Protein: {item.protein.toFixed(1)}g, 
                  Carbs: {item.carbohydrate.toFixed(1)}g, 
                  Fats: {item.fat.toFixed(1)}g
                </Text>
              </View>
            )}
          />
          <View style={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                title={(index + 1).toString()}
                onPress={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
  
}
