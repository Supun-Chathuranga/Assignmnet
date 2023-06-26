
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import RecipeList from './Component/RecipeList';
import AddRecipeForm from './Component/AddRecipeForm';
import RecipeDetails from './Component/RecipeDetails';
import RecipeEdit from './Component/RecipeEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {


  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="mt-4">
          <Routes>
            <Route
              path="/"
              element={<RecipeList/>}
            />
            <Route
              path="/add"
              element={<AddRecipeForm />}
            />
            <Route
              path="/recipe/:id"
              element={<RecipeDetails />}
            />
            <Route
              path="/edit/:id"
              element={<RecipeEdit />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;