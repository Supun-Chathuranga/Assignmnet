import React, { useState } from 'react';
import axios from 'axios';

const AddRecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState({});

  // Update the newRecipe state when input values change
  const handleOnChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/add', newRecipe)
      .then((response) => {
        alert(response.data);
        resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Reset the form inputs
  const resetForm = () => {
    setNewRecipe({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Recipe</h2>
      <div className="mb-3">
        <label htmlFor="recipeName" className="form-label">
          Recipe Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="recipeName"
          placeholder="Recipe Name"
          name="Recipe_Name"
          value={newRecipe.Recipe_Name || ''}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ingredients" className="form-label">
          Ingredients (comma-separated):
        </label>
        <input
          type="text"
          className="form-control"
          id="ingredients"
          placeholder="Ingredients"
          name="Ingrediants"
          value={newRecipe.Ingrediants || ''}
          onChange={handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          className="form-control"
          id="description"
          placeholder="Description"
          name="Description"
          value={newRecipe.Description || ''}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Save Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
