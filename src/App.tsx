import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Recipe, { RecipeData } from './components/Recipe';
import { useState } from 'react';

function App() {
  const [recipe, setRecipe] = useState({} as RecipeData)
  
  async function getRecipe()  {
    const requestBody = JSON.stringify({ingredients: ["tomato", "mozzarella", "basil", "chiocciole pasta", "olive oil"]})
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
      <Box>
          YourName's Magic Cookbook
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
