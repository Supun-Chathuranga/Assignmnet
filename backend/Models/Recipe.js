const mongoose = require("mongoose");

// Define the recipe schema
const RecipeSchema = new mongoose.Schema({
  Recipe_Name: {
    type: String,
    required: true,
  },
  Ingrediants: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

// Create and export the "Recipes" model based on the recipe schema
module.exports = mongoose.model("Recipes", RecipeSchema);
