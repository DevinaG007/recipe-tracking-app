import React, { useState } from "react";

function RecipeCreate(props) {
  const { createRecipe } = props;
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [recipe, setRecipe] = useState({ ...initialState });
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = ({ target }) =>
    setRecipe({ ...recipe, [target.name]: target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({ ...initialState });
  };
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
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={recipe.ingredients}
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={recipe.preparation}
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
