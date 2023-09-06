import React, { useState } from "react";
function RecipeCreate(props) { //function returns a form for user to create a recipe
  const { createRecipe } = props;
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  //newly created recipe is stored in recipe state
  const [recipe, setRecipe] = useState({ ...initialState });
  //Event handler functions for changes in input fields
  const handleChange = ({ target }) =>
    setRecipe({ ...recipe, [target.name]: target.value });
/*createRecipe function passed in from App.js is called to 
add the recipe to the existing recipes data
*/
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({ ...initialState });
  };
  //Returns a form with fields for user to create a recipe
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={recipe.name}
                  placeholder="Name"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={recipe.cuisine}
                  placeholder="Cuisine"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={recipe.photo}
                  placeholder="URL"
                />
              </label>
            </td>
            <td className="fit">
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={recipe.ingredients}
                  placeholder="Ingredients"
                />
              </label>
            </td>
            <td className="fit">
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={recipe.preparation}
                  placeholder="Preparation"
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
