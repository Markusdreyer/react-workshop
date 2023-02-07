import { Box, CircularProgress, Grid } from "@mui/material";
import { ReactNode } from "react";


interface LayoutProps {
    Header: ReactNode, 
    SearchBox: ReactNode, 
    Button: ReactNode,
    Recipe: ReactNode | null,
    loading: boolean
}

function Layout(props: LayoutProps){
    return(
        <Box sx={{ position:'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <Grid container spacing={2} paddingTop={4}>
                {props.Header}
                <Grid width={1}>
                    <Box sx={{padding: 2, spacing: 2, display: "flex", justifyContent: "center"}}>
                    {props.SearchBox}
                    {props.Button}
                    </Box>
                </Grid>
                <Grid width={1} alignContent={"center"}>
                {props.loading && (
                    <Box sx={{display: "flex", paddingTop: 2,justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress sx={{color: "#94b0d1"}}/>
                    </Box>
                    )}
                    {props.Recipe}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout