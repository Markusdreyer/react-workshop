import Button from '@mui/material/Button';

function App() {

    const getRecipe = () => {
            console.log("Hello world")
        }

    return (
        <Button onClick={() => getRecipe()}>Get Recipe</Button>
    );
}

export default App;