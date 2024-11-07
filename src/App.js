import { useCallback, useEffect, useMemo, useState } from "react";
import SwipeableViews from "react-swipeable-views";
// contexts
import { MainContext } from "./context";
// pages
import { Home, About, Resume, Courses } from "./pages";
// components
import MainLayout from "./layouts/MainLayout";
import SidebarContainer from "./containers/SidebarContainer";
import PagesContainer from "./containers/PagesContainer";
import { Sidebar } from "./components/sidebar";
import Page from "./pages/components/Page";
import { SidebarDrawerActionButton } from "./components/drawer";
// Material UI
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// styles
import "./styles/App.css";
import { gradients, links } from "./constants/particles";
import Comments from "./pages/Comments";





function App() {
   // states
   const [ mode, setMode ] = useState('light');
   const [pageNumber, setPageNumber] = useState(0);
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const [currentBgParticlesOptions, setCurrentBgParticlesOptions] = useState(null)


   // MUI data
   const theme = useTheme();
   const isMdUp = useMediaQuery( theme.breakpoints.up('md') );
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');


   // callbacks
   // + Dark / Light Themes
   const toggleTheme = () => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      if (isDrawerOpen) {
         closeSidebarDrawer();
      }
   }

   useEffect(() => {
      setMode( prefersDarkMode ? 'dark' : 'light' )
   }, [])



   // + Tabs
   const handlePageNumber = useCallback((e, newValue) => {
      setPageNumber(newValue);
   }, []);

   const handleSwipeChangeIndex = useCallback((newValue) => {
      setPageNumber(newValue);
   }, []);


   
   // + Drawer
   const toggleSidebarDrawer = useCallback(() => {
      setIsDrawerOpen((currentIsDrawerOpen) => !currentIsDrawerOpen);
   }, [isDrawerOpen]);

   const openSidebarDrawer = useCallback(() => {
      setIsDrawerOpen(true);
   }, [isDrawerOpen]);

   const closeSidebarDrawer = useCallback(() => {
      setIsDrawerOpen(false);
   }, [isDrawerOpen]);

   // ++ closing the Drawer, based on screen-size changes
   useEffect(() => {
      if (isMdUp) {
         closeSidebarDrawer();
      }
   }, [isMdUp])



   // bg-Particls
   const bgParticlesByPageNum = useMemo(() => (
      {
         1: links,
         // 2: gradients,
      }
   ), [])

   useEffect(() => {
      setCurrentBgParticlesOptions(null);
      setTimeout(() => {
         setCurrentBgParticlesOptions( bgParticlesByPageNum[pageNumber + 1] );
      }, 0);
   }, [pageNumber])



   return (
      <MainContext.Provider
         value={{
            toggleTheme,
            pageNumber,
            handlePageNumber,
            isDrawerOpen,
            toggleSidebarDrawer,
            openSidebarDrawer,
            closeSidebarDrawer,
            currentBgParticlesOptions,
            setCurrentBgParticlesOptions,
         }}
      >
         <MainLayout title="وبسایت شخصی پارسا فراهانی" mode={mode}>
            <SidebarContainer>
               <Sidebar />
            </SidebarContainer>

            <SidebarDrawerActionButton />

            <PagesContainer >
               <SwipeableViews
                  axis="x"
                  index={pageNumber}
                  onChangeIndex={handleSwipeChangeIndex}
               >
                  <Page pageNumber={pageNumber} index={0}>
                     <Home helmetTitle="پارسا فراهانی | صفحه اصلی" />
                  </Page>
                  <Page pageNumber={pageNumber} index={1}>
                     <About helmetTitle="پارسا فراهانی | درباره من" />
                  </Page>
                  <Page pageNumber={pageNumber} index={2}>
                     <Resume helmetTitle="پارسا فراهانی | رزومه من" />
                  </Page>
                  <Page pageNumber={pageNumber} index={3}>
                     <Courses helmetTitle="پارسا فراهانی | دوره های من" />
                  </Page>
                  <Page pageNumber={pageNumber} index={4}>
                     <Comments helmetTitle="پارسا فراهانی | نظرات افراد" />
                  </Page>
                  <Page pageNumber={pageNumber} index={5}>
                     <Typography
                        variant="h5"
                        component="h2"
                        sx={{ textAlign: "center" }}
                     >
                        نمونه کار ها
                     </Typography>
                  </Page>
                  <Page pageNumber={pageNumber} index={6}>
                     <Typography
                        variant="h5"
                        component="h2"
                        sx={{ textAlign: "center" }}
                     >
                        تماس با من
                     </Typography>
                  </Page>
               </SwipeableViews>
            </PagesContainer>
         </MainLayout>
      </MainContext.Provider>
   );
}

export default App;
