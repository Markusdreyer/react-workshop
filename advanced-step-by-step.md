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
  justifyContent // Controls how child elements are positioned horizontally within a parent container
  textAlign // Controls how the text content within an element is aligned horizontally
  fontSize // Controls the font size of text
  opacity // Controls the transparency of an element. 
  position // Controls the positioning of an element within its parent container. By using position in combination with other CSS properties, such as top,            // bottom, left, and right, you can create complex layouts that position elements exactly where you want them on the page.
  padding // Controls the amount of space between the content of an element and its border
  margin // Controls the amount of space between an element and its surrounding elements or container
  ```
  
  Sounds like a lot, but we'll be able to get familiar with them all rather quickly. First off lets add a background image, this always helps to make things look nicer, instead of having an entirely white background. We'll have to make use of some positioning, and some more uncommon styling options. Lets have a look at an example below
  
  ```tsx
  <Box sx={{
    backgroundImage: `url(${url/to/image})`, // Sets the path to the image we want to use as background for the container
    backgroundSize: "cover",  // The size of the background, we're using cover as we want it to cover the entire container
    height: "100vh",  // The height of the container, there are several options to use here, but we're going to use something named vh, short for viewport height, which is the visible portion of the browser window that displays the web page.
    opacity: 0.35, // The transparency of the container, we want it to be partially transparent so we can see the other components/elements we need
  }}/>
  ```
  
  Now we've already included some images in the folder `src/files/` these can be imported using
  ```tsx
  import Image from './files/background.jpg';
  
  <Box sx={{
    backgroundImage: `url(${Image})`,
    .....
  </Box>
  ```
  
Try adding this background now!
  
  <details>
  <summary>:sparkles:Show solution:sparkles:</summary>
    
    
```tsx
import { Autocomplete, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Recipe, { RecipeData } from "./components/Recipe";
import { useState } from "react";
import IngredientOptions from './files/Ingredients.json'
import Image from './files/background.jpg';

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
            <Box sx={{
            backgroundImage: `url(${Image})`, 
            backgroundSize: "cover", 
            height: "100vh", 
            opacity: 0.35,
            }}/>
            <Box >YourName's Magic Cookbook</Box>
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
                }
                />
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


```
</details>
    
As you'll quickly notice, we've got a nice background, but our text, autocomplete box and button aren't correctly position anymore and appear below the image. This is because they are not nested within the `<Box>` component with the backgroundImage, however, this `<Box>` component has a very low opacity value, which would cause our other components and elements to become highly transparent. Another way to position them is by wrapping the other elements in another `<Box>` component and using `position: "absolute"`. 
    
```tsx
<>
  <Box sx={{ backgroundImage: .....}}/>
  <Box sx={{ position:'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
    <...></...>
    <...></...>
  </Box>
</>
```

The `position: "absolute"` will position the element relative to its nearest positioned ancestor, as we don't have a positioned ancestor in this case, we will also use the `top, left, right, bottom` styling options, to set the position explicity. When using the value `0, 0, 0, 0` for these, 

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
