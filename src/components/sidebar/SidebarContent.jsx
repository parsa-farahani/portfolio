// components
import SidebarHeader from "./SidebarHeader";
import SidebarTabs from "./SidebarTabs";
import SidebarFooter from "./SidebarFooter";
// MUI
import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarDrawer } from "../drawer";
import PropTypes from "prop-types";
// icons
// styles

const SidebarContent = (props) => {
   // props
   const {
      inDrawer,
   } = props;

   return (
      <>
         <Box
            component="header"
            sx={{
               // position: 'relative',
               // zIndex: 10,
               height: "100%",
               overflowY: "auto",
               bgcolor: 'background.sidebar',
               display: 'flex',
               flexDirection: "column",
            }}
         >
            <SidebarHeader inDrawer={inDrawer} />

            <Divider variant="middle" />

            <SidebarTabs
               inDrawer={inDrawer}
            />

            <Divider variant="middle" />

            <SidebarFooter />
         </Box>
      </>
   );
};

SidebarDrawer.propTypes = {
   inDrawer: PropTypes.bool,
}

export default SidebarContent;
