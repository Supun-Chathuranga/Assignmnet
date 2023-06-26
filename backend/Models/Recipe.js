const mongoose=require("mongoose");

const RecipeSchema=new mongoose.Schema({
    Recipe_Name:{
        type:String,
        required:true
    },
    Ingrediants:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Recipes",RecipeSchema);