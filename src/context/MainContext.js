import { createContext } from "react";

const MainContext = createContext({
   toggleTheme: () => {},
   pageNumber: 0,
   handlePageNumber: () => {},
   isDrawerOpen: false,
   toggleSidebarDrawer: () => {},
   openSidebarDrawer: () => {},
   closeSidebarDrawer: () => {},
});

export default MainContext;