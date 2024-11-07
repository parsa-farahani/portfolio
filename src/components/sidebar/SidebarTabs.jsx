import { useCallback, useContext, useMemo } from "react";
// utils/data
import { getTabsData } from "../data/tabsData.sidebar";
// contexts
import { MainContext } from "../../context";
// MUI
import { useTheme } from "@mui/material";
import { Stack, Tab, Tabs, Typography } from "@mui/material";
// icons
import { AssignmentRounded, ConnectWithoutContactRounded, HomeRounded, SentimentSatisfiedRounded, TerminalRounded } from "@mui/icons-material";
// styles
import styles from '../../styles/SidebarTabs.module.css';


const SidebarTabs = (props) => {
   // contexts
   const { pageNumber, handlePageNumber, closeSidebarDrawer } = useContext(MainContext);


   // tabs data
   const tabsData = useMemo(() => {
      return getTabsData();
   }, [getTabsData])


   // MUI data
   const theme = useTheme();


   return (
      <Tabs
         orientation="vertical"
         variant="scrollable"
         scrollButtons="auto"
         allowScrollButtonsMobile
         value={pageNumber}
         onChange={handlePageNumber}
         sx={{
            pl: 2,
            py: 2,
         }}
         textColor={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
         indicatorColor={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
      >
         {
            tabsData.map((tabData, i) => {
               const { label, icon, ...other } = tabData;
               return (
                  <Tab
                     key={i}
                     onClick={closeSidebarDrawer}
                     label={
                        <Stack direction="row" spacing={1} sx={{alignItems: "center"}} >
                           { icon }
                           <Typography variant="h6" component="h2" color="text.secondary" >
                              { label }
                           </Typography>
                        </Stack>
                     } 
                     {...other}
                     className={styles['sidebar__navtab']}
                     sx={{
                        alignItems: 'flex-start',
                        mb: '.25rem',
                        mr: '.75rem',
                        py: 0,
                        backgroundColor: 'transparent',
                        borderRadius: '10px',
                        transition: '.3s',

                        '&[class*="Mui-selected"], &[class*="Mui-selected"]:hover': {
                           backgroundColor: 'tab.primary',
                        },
                     
                        '&:hover': {
                           backgroundColor: 'tab.secondary',
                        }
                     }}
                  />
               )
            })
         }
      </Tabs>
   );
}
 
export default SidebarTabs;