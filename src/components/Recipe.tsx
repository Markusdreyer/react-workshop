import { Box } from "@mui/material";

export interface RecipeData{
    title: string
    description: string
    ingredients: string[]
    steps: string[]
}

function Recipe(props: RecipeData){
    return (
        <Box>
            <Box>
                {props.title}
            </Box>
            <Box>
                {props.description}
            </Box>
            <Box>
                <ul>
                    {props.ingredients.map((element, index) => (
                        <li key={index}>
                            {element}
                        </li>
                    ))}
                </ul>
            </Box>
            <Box>
                <ul>
                    {props.steps.map((element, index) => (
                        <li key={index}>
                            {element}
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    )
}
  
export default Recipe;