import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  
  const [recipes, setRecipes] = useState(RecipeData);
  document.title = "Recipe App"
  /*createRecipe function adds a new recipe from the 
  RecipeCreate component and adds it to the current recipes array */
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  };

  /*deleteRecipe passes an index in from the map function 
  in the RecipeList component, and deletes that recipe */

  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
    //filtering the array of recipes and returning all but deleted recipe
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    )}
 
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
