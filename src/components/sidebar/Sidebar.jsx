import { useState, useContext } from "react";
import PropTypes from "prop-types";
// contexts
import { MainContext } from "../../context";
// components
import { SidebarContent } from "./";
import { SidebarDrawer } from "../drawer";
// MUI
// Icons
// styles



const Sidebar = (props) => {

   return (
      <>

         <SidebarContent/>

         <SidebarDrawer />
      
      </>
   );
};

Sidebar.propTypes = {

};

export default Sidebar;
