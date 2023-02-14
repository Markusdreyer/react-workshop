import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  
  async function getRecipe {
    const requestBody = JSON.stringify({
        ingredients: [
            "tomato", 
            "mozzarella", 
            "basil", 
            "chiocciole pasta", 
            "olive oil"
        ]
    })
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
          <Button onClick={getRecipe()}>Get Recipe</Button>
      </Box>
  );
}
export default App;
