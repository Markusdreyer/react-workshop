import './App.css';
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
    <Button onClick={getRecipe}>Get Recipe</Button>
  );
}

export default App;
