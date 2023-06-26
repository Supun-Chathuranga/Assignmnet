import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from './RecipeList';

const Home = ({ recipes, onDelete, onEdit }) => {
  return (
    <div className="container">
      {/* Link to navigate to the "Add Recipe" page */}
      <Link to="/add" className="btn btn-primary mt-3">Add a Recipe</Link>
      {/* Render the RecipeList component */}
      <RecipeList recipes={recipes} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default Home;
