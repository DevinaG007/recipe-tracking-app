import React from "react";

function RecipeView(props) {
    const {recipe, deleteRecipe} = props;
    return (
        <>
        <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>{recipe.photo}</td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td> 
         <button name="delete" onClick={deleteRecipe}>Delete</button>
        </td>
        </tr>
        </>
    )
}

export default RecipeView;