import { Button } from '@mui/material';
import { RecipeData, getRecipe } from './Query';

interface MagicButtonProps {
    ingredients: string[]
    buttonColor:{
      text: string;
      background: string;
      border: string;
    };
    borderSize: string
    setRecipe: React.Dispatch<React.SetStateAction<RecipeData>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function MagicButton(props: MagicButtonProps){
    return(
        <Button 
            variant="outlined" 
            onClick={() => getRecipe(props.ingredients, props.setRecipe, props.setLoading)}
            sx={{ 
                marginLeft: "8px", 
                borderColor: props.buttonColor.border,
                color: props.buttonColor.text, 
                opacity: 0.8,
                backgroundColor: props.buttonColor.background,
                border: props.borderSize + " solid " + props.buttonColor.border
            }}>
            Create Recipe
        </Button>
    )
}

export default MagicButton;