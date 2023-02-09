import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  
  const getRecipe = async () => {
    const requestBody = JSON.stringify({ingredients: ["tomato", "mozzarella", "basil", "chiocciole pasta", "olive oil"]})
    await fetch("http://localhost:8000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  
  return (
      <Box>
          YourName's Magic Cookbook
          <Button variant={'outlined'} onClick={() => getRecipe()}>Get Recipe</Button>
      </Box>
  );
}
export default App;
