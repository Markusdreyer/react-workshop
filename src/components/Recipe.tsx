import { Box, List, ListItem } from "@mui/material";

export interface RecipeData{
    title: string
    description: string
    ingredients: string[]
    steps: string[]
}

function Recipe(props: RecipeData){
    return (
        <>
            <Box>{props.title}</Box>
            <Box>{props.description}</Box>
            <List>
                {props.ingredients.map((ingredient, index) => (
                    <ListItem key={index}>{ingredient}</ListItem>
                ))}
            </List>
            <List>
                {props.steps.map((step, index) => (
                    <ListItem key={index}>{step}</ListItem>
                ))}
            </List>
    </>
    )
}
  
export default Recipe;
