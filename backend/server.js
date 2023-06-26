const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors = require("cors");
const recipeRouts = require("./Routs/RecipeRouts");//import Routes


const app=express();

//initialize PORT to run backend
const PORT=8000;

//app middleware
app.use(bodyParser.json());

app.use(cors());


app.use("/",recipeRouts);

//mongoDb connection URL
const mongoDb_URL="mongodb+srv://supun94:JtjJpYtvpZs7YwQ9@cluster1.aqlxd8u.mongodb.net/Code94?retryWrites=true&w=majority";





//connect to mongoDB
mongoose.connect(mongoDb_URL).then(()=>{
    console.log("DB connected...");
}).catch((err)=>{
    console.log(err);
});

//start server
app.listen(PORT,()=>console.log(`Server is running on Port ${PORT}`));