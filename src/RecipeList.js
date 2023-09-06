import React from "react";
import RecipeView from "./RecipeView";
/*This component takes the array of recipes passed in 
from App component and maps the row data from RecipeView into 
a table with headings
*/
function RecipeList(props) {
  const {recipes, deleteRecipe} = props;

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          //maps the recipe rows from RecipeView into a table
        recipes.map((recipe, index) => (
          <RecipeView 
          deleteRecipe={()=> deleteRecipe(index)}
          key={index}
          recipe={recipe}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
