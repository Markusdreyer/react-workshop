import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function App() {

    const getRecipe = () => {
            console.log("Hello world")
        }

        return (
            <Box>
                YourName's Magic Cookbook
                <Button onClick={() => getRecipe()}>Get Recipe</Button>
            </Box>
        );
}

export default App;
