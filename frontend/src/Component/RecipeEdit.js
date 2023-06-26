import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeEdit = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    description: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/update/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setRecipe(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`/api/recipes/${id}`, recipe)
      .then(response => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Recipe Name</label>
          <input type="text" className="form-control" id="name" name="name" value={recipe.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">Ingredients</label>
          <input type="text" className="form-control" id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={recipe.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default RecipeEdit;
