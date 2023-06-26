const router = require ("express").Router();
const Recipe = require("../Models/Recipe");



//retreve all recipes from DB
router.route("/").get((req,res)=>{

    Recipe.find().then((recipes)=>{
        res.json(recipes);
    }).catch((err)=>{
        console.log(err);
    })
})

//Save Recipes
router.post("/add",(req,res)=>{
    const Recipe_Name=req.body.Recipe_Name;
    const Ingrediants=req.body.Ingrediants;
    const Description=req.body.Description;

    const newRecipe=new Recipe({
        Recipe_Name,
        Ingrediants,
        Description
    }).save().then(()=>{
        res.json("New Recipe Added!");
    }).catch((err)=>{
        console.log(err);
    })
    
})

//find selected recipe with using it's ID
router.route("/find/:id").get((req,res)=>{
    let id =  req.params.id;

    Recipe.findById(id).then((response)=>{
        res.json(response);
    }).catch((err)=>{
        console.log(err);
    })
})

//update a unique recipe with using it's ID
router.route("/update/:id").put((req,res)=>{
    let id=req.params.id;
    const {Recipe_Name,Ingrediants,Description}=req.body;

    const updateRecipe={
        Recipe_Name,
        Ingrediants,
        Description,
    }

    Recipe.findByIdAndUpdate(id,updateRecipe)
    .then(()=>{
        res.json("Selected recipe is updated!")
    }).catch((err)=>{
        console.log("Selected recipe update unsuccessfull!",err);
    })
})


//delete a unique recipe with using it's ID

router.route("/delete/:id").delete((req,res)=>{
    let id=req.params.id;

    Recipe.findByIdAndDelete(id)
    .then(()=>{
        res.json("Selected recipe is deleted!");
    }).catch((err)=>{
        console.log("Selected recipe deletion unsuccessfull!")
    })
})


module.exports=router;
