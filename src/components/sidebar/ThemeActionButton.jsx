import { useContext } from "react";
// context
import { MainContext } from "../../context";
// MUI
import { Box, Fab, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// icons
import { BedtimeRounded, WbSunnyRounded } from "@mui/icons-material";


const ThemeActionButton = () => {

   const { toggleTheme } = useContext(MainContext);

   // theme
   const theme = useTheme();

   return (
      <>
         <Box
            sx={{
               position: 'absolute',
               zIndex: 10,
               top: '1rem',
               left: '1rem',
               right: 'auto',
            }}
         >
            <Fab
               variant="circular"
               size="small"
               onClick={toggleTheme}
               color="secondary"
               aria-label="change theme"
            >
               {
                  (theme.palette.mode === 'dark') ? (
                     <WbSunnyRounded />
                  ) : (
                     <BedtimeRounded />
                  )
               }               
            </Fab>
         </Box>
      </>
   );
}
 
export default ThemeActionButton;