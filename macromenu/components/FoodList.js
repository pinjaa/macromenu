import React from 'react';

function FoodList({ foods }) {
  return (
    <div>
      <h2>Logged Foods</h2>
      {foods.length === 0 ? (
        <p>No foods added yet.</p>
      ) : (
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
            <strong>{food.name}</strong> - Energy: {food.kcal.toFixed(0)}kcal, Protein: {food.protein.toFixed(1)}g, Carbs: {food.carbs.toFixed(1)}g, Fats: {food.fats.toFixed(1)}g
          </li>          
          ))}
        </ul>
      )}
    </div>
  );
}

export default FoodList;
