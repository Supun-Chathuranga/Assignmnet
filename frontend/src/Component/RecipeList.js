import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  // get all recipes from the database
  useEffect(() => {
    axios.get("http://localhost:8000")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log("Cannot get data", error);
      });
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
            <tr key={recipe._id}>
              <td>
                <Link to={`/recipe/${recipe._id}`} style={{ textDecoration: 'none' }}>
                  {recipe.Recipe_Name}
                </Link>
              </td>
              <td>{recipe.Ingrediants}</td>
              <td>{recipe.Description}</td>
              <td>
                <div className="d-flex">
                  <button className="btn btn-danger me-2" onClick={(event) => handleRecipeDelete(recipe._id, event)}>Delete</button>
                  <Link to={`/edit/${recipe._id}`} className="btn btn-primary">Edit</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecipeList;
