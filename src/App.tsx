import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function App() {

    const getRecipe = () => {
            console.log("Hello world")
        }

        return (
            <Box sx={{textAlign: "center", justifyContent: "center", padding: 2}}>
                <Box sx={{fontSize: 26, paddingBottom: 2}}>
                YourName's Magic Cookbook
                </Box>
                <Button variant={'outlined'} onClick={() => getRecipe()}>Get Recipe</Button>
            </Box>
        );
}

export default App;