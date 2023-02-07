import { Box, Paper } from "@mui/material"
import { RecipeData } from "./Query"


function Recipe(props: RecipeData, textColor: "#232323"){
    if (props.title){
        return (
            <Box sx={{paddingTop: 4, spacing: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Paper sx={{width: 0.6, backgroundColor: "#f3f3f3", opacity: 0.9}}>
                    <Box sx={{ textAlign: 'center', m: 1, fontSize: "24px", color: textColor}}>
                        {props.title}
                    </Box>
                    <Box sx={{ textAlign: 'center', m: 1, fontSize: "16px", color: textColor}}>
                        {props.description}
                    </Box>
                    <Box sx={{ paddingTop: 2, textAlign: 'left', m: 1, fontSize: "16px", color: textColor}}>
                        <Box sx={{paddingLeft: 4}}>
                            Ingredients
                        </Box>
                        {mapList(props.ingredients)}
                    </Box>
                    <Box sx={{ textAlign: 'left', m: 1, fontSize: "16px", color: textColor}}>
                        <Box sx={{paddingLeft: 4}}>
                            Instructions
                        </Box>
                        {mapNumberedList(props.steps)}
                    </Box>
                </Paper>
            </Box>
        )
    }
    return null;
}

function mapNumberedList(list: string[]){
    return (
        <ol>
            {list.map((element, index) => (
                <li key={index}>
                    {element}
                </li>
            ))}
        </ol>
    )
}

function mapList(list: string[]){
    return (
        <ul>
            {list.map((element, index) => (
                <li key={index}>
                    {element}
                </li>
            ))}
        </ul>
    )
}

export default Recipe