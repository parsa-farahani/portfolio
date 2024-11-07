import { useContext } from "react";
import PropTypes from "prop-types";
// contexts
import { MainContext } from "../context";
// MUI
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BgParticles from "../pages/components/BgParticles";


const ContentContainer = (props) => {
   // contexts
   const { currentBgParticlesOptions } = useContext(MainContext);

   // props
   const { children } = props;


   return (
      <Grid
         size={{ xs: 12, md: 9, lg: 9, xl: 10 }}
         sx={{ position: 'relative', bgcolor: 'background.paper'}}
      >
         <BgParticles options={currentBgParticlesOptions} />
         {children}
      </Grid>
   );
};

ContentContainer.propTypes = {
   children: PropTypes.node,
};


export default ContentContainer;
