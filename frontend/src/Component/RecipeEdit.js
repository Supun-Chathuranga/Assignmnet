import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeEdit = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    Recipe_Name: '',
    Ingrediants: '',
    Description: ''
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a PUT request to update the recipe with the given ID
    axios
      .put(`http://localhost:8000/update/${id}`, recipe)
      .then((response) => {
        alert(response.data);
        // Clear the form fields after successful update
        setRecipe({
          Recipe_Name: '',
          Ingrediants: '',
          Description: ''
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle input changes
  const handleOnChange = (e) => {
    // Update the corresponding field in the recipe state
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Recipe Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="Recipe_Name"
            value={recipe.Recipe_Name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredients
          </label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            name="Ingrediants"
            value={recipe.Ingrediants}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="Description"
            value={recipe.Description}
            onChange={handleOnChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default RecipeEdit;
