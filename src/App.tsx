import { Autocomplete, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Recipe, { RecipeData } from "./components/Recipe";
import { useState } from "react";
import IngredientOptions from './files/Ingredients.json'

function App() {
    const [recipe, setRecipe] = useState({} as RecipeData)
    const [ingredients, setIngredients] = useState([] as string[])
    
    async function getRecipe() {
      const requestBody = JSON.stringify({
          ingredients: ingredients
      })
      await fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      })
        .then((response) => response.json())
        .then((data) => setRecipe(data));
    }
    
    return (
        <>
            <Box>YourName's Magic Cookbook</Box>
            <Autocomplete 
              multiple // Allows you to select multiple items
              filterSelectedOptions // Filters out selected items
              disableCloseOnSelect // Prevents closing the dropdown menu on selecting an item
              options={IngredientOptions} // The options shown in the dropdown menu
              onChange={(event: any, newValue: string[]) => { // Handles changes, allowing you to set a state with the new values
                setIngredients(newValue); // Here we're using a [ingredient, setIngredient] = useState([""]) state
              }}
              renderInput={(params) => (
                <TextField {...params} label="Ingredients" /> // The input field, showing what you type if you're using the built in search function
              )
            }/>
            <Button onClick={getRecipe}>Get Recipe</Button>
            {recipe.title && 
              <Recipe 
                title={recipe.title} 
                description={recipe.description} 
                ingredients={recipe.ingredients} 
                steps={recipe.steps}
              />
            }
        </>
    );
  }

export default App;
