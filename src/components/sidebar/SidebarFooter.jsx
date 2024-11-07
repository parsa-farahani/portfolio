// MUI
import { CopyrightRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";



const SidebarFooter = () => {
   return (
      <Box sx={{flexGrow: 1, mt: 'auto', py: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
         <Typography variant="caption" color="text.primary" >
            copyright 2024 {" "}
            <CopyrightRounded sx={{verticalAlign: 'middle', height: 16}} /> {" "}
            -- Parsa Farahani
         </Typography>
      </Box>
   );
}
 
export default SidebarFooter;