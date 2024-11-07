import { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
// components
// MUI
import { ThemeProvider, useColorScheme } from "@mui/material/styles";
import { createTheme, useMediaQuery } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Grid from "@mui/material/Grid2";
import { darkTheme, lightTheme } from "./theme";

// Note: create MUI rtl-cache
const cacheRtl = createCache({
   key: "muirtl",
   stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children, title, mode }) => {



   // dark/light themes
   const theme = (mode === 'dark') ? darkTheme : lightTheme;



   return (
      <CacheProvider value={cacheRtl}>
         <ThemeProvider theme={ theme }>
            <HelmetProvider>

               <Grid container spacing={0} sx={{ height: "100svh" }}>
                  {children}
               </Grid>

            </HelmetProvider>
         </ThemeProvider>
      </CacheProvider>
   );

};

MainLayout.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node,
};

export default MainLayout;
