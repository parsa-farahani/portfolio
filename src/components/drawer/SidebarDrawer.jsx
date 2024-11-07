import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
// components
import { SidebarContent } from "../sidebar";
// contexts
import { MainContext } from "../../context";
// MUI
import { useMediaQuery, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";



const SidebarDrawer = (props) => {
   // contexts
   const {isDrawerOpen, closeSidebarDrawer} = useContext(MainContext);

   // MUI theme
   const theme = useTheme();

   // media-queries



   return (
      <Drawer
         open={isDrawerOpen}
         onClose={ closeSidebarDrawer }
         keepMounted
         sx={{
            display: {
               xs: "block",
               md: "none",
            },
            "& .MuiDrawer-paper": {
               width: 300,
               background: grey[900],
            },
         }}
      >
         <SidebarContent
            inDrawer={true}
         />
      </Drawer>
   );
}

SidebarDrawer.propTypes = {
}
 
export default SidebarDrawer;