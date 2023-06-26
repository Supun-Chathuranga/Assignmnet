import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/find/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="container">
      <h2 className="mt-5">Recipe Details</h2>
      <p className="mb-2"><strong>Name:</strong> {recipe.Recipe_Name}</p>
      <p className="mb-2"><strong>Ingredients:</strong> {recipe.Ingrediants}</p>
      <p className="mb-2"><strong>Description:</strong> {recipe.Description}</p>
    </div>
  );
};

export default RecipeDetails;
