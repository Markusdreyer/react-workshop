import { Box } from "@mui/material";
import Image1 from '../Files/background.jpg';
import Image2 from '../Files/background2.jpg';
import { useEffect, useState } from "react";

function Background(){
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      function handleScroll() {
        setScrollPosition(window.pageYOffset);
        
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return(
        <>
            <Box sx={{
            backgroundImage: `url(${Image1})`, 
            backgroundSize: "cover", 
            height: "100vh", 
            opacity: 0.35, 
            position: 'relative'
            }}>
            </Box>
            {scrollPosition > 0 && (
            <Box sx={{
                backgroundImage: `url(${Image2})`, 
                backgroundSize: "cover", 
                height: "100vh", 
                opacity: 0.35, 
                position: 'relative',
                top: "0vh"
            }}>
            </Box>
            )}
        </>
    );
}

export default Background;