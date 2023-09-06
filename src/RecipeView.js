import React from "react";

/*This components responsibility is to take the recipe data
passed in from RecipeList and return a row with said data
*/
function RecipeView(props) {
    const {recipe, deleteRecipe} = props;
    //deleteRecipe function is passed as a prop to handle delete button click
    return (
        <>
        <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo}/></td>
        <td className="content_td bigcol"><p>{recipe.ingredients}</p></td>
        <td className="content_td bigcol"><p>{recipe.preparation}</p></td>
        <td> 
         <button name="delete" onClick={deleteRecipe}>Delete</button>
        </td>
        </tr>
        </>
    )
}

export default RecipeView;