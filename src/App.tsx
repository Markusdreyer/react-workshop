import { Autocomplete, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Recipe, { IRecipe } from './components/Recipe';

function App() {

    const getRecipe = () => {
            console.log("Hello world")
        }

    const ingredients = [
        "chicken",
        "salmon",
        "beef",
    ]

    const recipe: IRecipe = {
        title: "Chicken Soup",
        description: "A delicious chicken soup",
        ingredients: ["chicken", "broth", "carrots"],
        steps: ["boil chicken", "add broth", "add carrots"],
    }

    return (
        <>
            <h1>Markus' Cookbook</h1>
            <Button onClick={() => getRecipe()}>Get Recipe</Button>
            <Autocomplete multiple options={ingredients} renderInput={(params) => (
                <TextField {...params} label="Ingredients" />
            )}/>
            <Recipe recipe={recipe}/>
        </>
    );
}

export default App;

