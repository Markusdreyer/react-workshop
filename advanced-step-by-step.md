# Advanced Step by step guide
This is a step by step guide to improving the design and layout of the solution. To follow the solution, make sure your solution has all the basic
functionality in place, e.g. that you have finished Steps 1-6 of the step-by-step.md file

## Centering items and using some jsx for styling
<details>
  <summary>:hand: Make it look better</summary>
  
  <br/>So, lets finally take some advantage of having used the `<Box>` component and other Material UI components. Material UI Components have a property named
  sx that allows you to access styling options, such as changing positioning, colors, font sizes and much more. lets have a look at how it is used
  
  ```tsx
  <Box sx={{fontSize: 24}}> something something </Box>
  ```
  
  Some of the styling optinos we'll be using are the following
  
  ```tsx
  justifyContent
  textAlign
  fontSize
  opacity
  position
  ```
  
  So now we want to center all our elements, and the text in the header e.g. `YourName's Magic Cookbook`. One way of centering all our elements is to replace the existing parent element, `<>` with a `<Box>` component and adding sx styles to this. As a parent's styling option will in most cases be applied to all child elements.
  
  You can try doing this yourself or see the solution below
  
<details>
  <summary>:sparkles:Show solution:sparkles:</summary>

```tsx
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
        <Box sx={{justifyContent: "center"}}>
            <Box sx={{textAlign: "center"}}>YourName's Magic Cookbook</Box> 
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
        </Box>
    );
  }

export default App;

```
  Notice that we're adding the `textAlign` styling to the `<Box>` component which is used for the header. This is because we only want to center this text, as we'll be adding different styling options to the `<Recipe>` component.  
  </details>

</details>
