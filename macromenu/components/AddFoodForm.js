import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddFoodForm.css';

export default function AddFoodForm({ addFood }) {
  const [foodName, setFoodName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foodOptions, setFoodOptions] = useState([]); // Holds the current page items
  const [fullFoodList, setFullFoodList] = useState([]); // Holds the full list of food items
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFoodOptions([]); // Clear previous options

    try {
      const response = await axios.get(`https://fineli.fi/fineli/api/v1/foods?q=${foodName}`);
      const foodData = response.data;

      if (foodData.length > 0) {
        setFullFoodList(foodData); // Store the full list of results
        setTotalPages(Math.ceil(foodData.length / itemsPerPage)); // Calculate total pages
        setCurrentPage(1); // Reset to the first page
        setFoodOptions(foodData.slice(0, itemsPerPage)); // Set the first page of results
      } else {
        setError('No food found with that name.');
      }
    } catch (err) {
      setError('Error fetching food data.');
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
    setFoodOptions([]); // Clear options after selection
    setFullFoodList([]); // Clear the full list after selection
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          placeholder="Enter food name..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Search Food'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      {foodOptions.length > 0 && (
        <div>
          <ul>
            {foodOptions.map((foodItem, index) => (
              <li key={index} onClick={() => handleSelectFood(foodItem)}>
                {foodItem.name.fi}
              </li>
            ))}
          </ul>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                disabled={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
}
