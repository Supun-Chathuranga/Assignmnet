
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from './RecipeList';

const Home = ({ recipes, onDelete, onEdit }) => {
  return (
    <div className="container">
      <h1 className="mt-5">Home Page</h1>
      <Link to="/add" className="btn btn-primary mt-3">Add a Recipe</Link>
      <RecipeList recipes={recipes} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default Home;
