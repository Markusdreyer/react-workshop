import { Box } from "@mui/material";

export interface RecipeData{
    title: string
    description: string
    ingredients: string[]
    steps: string[]
}

function Recipe(props: RecipeData){
    return (
            <Box>{props.title}</Box>
            <Box>{props.description}</Box>
            <List>
                {props.ingredients.map((ingredient) => (
                    <ListItem>{ingredient}</ListItem>
                ))}
            </List>
            <List>
                {props.steps.map((step) => (
                    <ListItem>{step}</ListItem>
                ))}
            </List>
    )
}
  
export default Recipe;