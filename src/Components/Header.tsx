import { Box, Grid } from "@mui/material";

interface HeaderProps{
    name: string
    color: string
    fontSize: string
}

function Header(props: HeaderProps){
    return(
        <Grid width={1} height={"5%"}>
            <Box sx={{ textAlign: 'center', m: 1, fontSize: props.fontSize, color: props.color}}>
                {props.name}'s Magic Cookbook
            </Box>
        </Grid>
    )
}

export default Header