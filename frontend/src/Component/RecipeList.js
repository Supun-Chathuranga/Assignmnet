import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // get all recipes from the database
  useEffect(() => {
    axios.get("http://localhost:8000")
      .then((response) => {
        setRecipes(response.data);
      }).catch((err) => {
        console.log("Can not get data ", err);
      })
  }, []);

  // delete selected recipe
  const handleRecipeDelete = (id, event) => {
    event.stopPropagation(); // Prevent event propagation
    const confirmDelete = window.confirm("Are you sure you want to delete the recipe?");
    if (confirmDelete) {
      axios.delete(`http://localhost:8000/delete/${id}`)
        .then((response) => {
          alert(response.data);
          setRecipes(recipes.filter((recipe) => recipe._id !== id));
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      // Stop further execution if delete is canceled
      return;
    }
  }

  // navigate to recipe details page
  const navigateToRecipeDetails = (id) => {
    navigate(`/recipe/${id}`);
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id} onClick={() => navigateToRecipeDetails(recipe._id)} style={{ cursor: 'pointer' }}>
              <td>{recipe.Recipe_Name}</td>
              <td>{recipe.Ingrediants}</td>
              <td>{recipe.Description}</td>
              <td>
                <button className="btn btn-danger" onClick={(event) => handleRecipeDelete(recipe._id, event)}>Delete</button>
                <Link to={`/edit/${recipe._id}`} className="btn btn-primary">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
