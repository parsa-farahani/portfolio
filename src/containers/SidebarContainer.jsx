// MUI
import Grid from "@mui/material/Grid2";



const SidebarContainer = ({children}) => {
   return (
      <Grid
        size={{ xs: 0, md: 3, lg: 3, xl: 2 }}
        sx={{
         height: '100svh',
         overflowY: 'auto',
         overflowX: 'hidden',
        }}
      >
         {
            children
         }
      </Grid>
   );
}
 
export default SidebarContainer;