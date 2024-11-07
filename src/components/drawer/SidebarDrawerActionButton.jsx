import { useCallback, useContext } from "react";
// contexts
import { MainContext } from "../../context";
// MUI
import { Box, Fab } from "@mui/material";
import { grey } from "@mui/material/colors";
// icons
import { MenuRounded } from "@mui/icons-material";
import PropTypes from "prop-types";



const SidebarDrawerActionButton = (props) => {
   // contexts
   const { toggleSidebarDrawer } = useContext(MainContext);


   return (
      <Box
         sx={{
            display: {
               xs: "block",
               md: "none",
            },
            position: "fixed",
            zIndex: 1,
            left: 1,
            top: 1,
         }}
      >
         <Fab
            size="small"
            onClick={ toggleSidebarDrawer }
            sx={{
               m: 2,
               bgcolor: 'background.paper',
               color: grey[300],
               "&:focus": {
                  bgcolor: 'background.paper',
               },
            }}
         >
            <MenuRounded />
         </Fab>
      </Box>
   );
}

SidebarDrawerActionButton.propTypes = {
}
 
export default SidebarDrawerActionButton;