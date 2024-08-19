import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/FoodItem';

function FoodList({ foods }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logged Foods</Text>
      {foods.length === 0 ? (
        <Text style={styles.noFoodsText}>No foods added yet.</Text>
      ) : (
        <FlatList
          data={foods}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.foodItem}>
              <Text style={styles.foodText}>
                <Text style={styles.foodName}>{item.name}</Text> - Energy: {item.kcal.toFixed(0)} kcal, 
                Protein: {item.protein.toFixed(1)}g, Carbs: {item.carbs.toFixed(1)}g, 
                Fats: {item.fats.toFixed(1)}g
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}


export default FoodList;

