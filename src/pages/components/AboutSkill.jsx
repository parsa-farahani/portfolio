// MUI
import { Box, Chip, Divider, LinearProgress, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";
import Grid from "@mui/material/Grid2";



const AboutSkill = (props) => {

   // props
   const {name, value, icon, color, bgColor} = props;


   // MUI data
   const theme = useTheme();


   return (
      <>
         <Grid size={{xs: 12, md: 6, lg: 6}} sx={{mb: 4, px: 2}} >
            <Typography variant="h5" component="h3" aria-label={name} textAlign="center" >
               <Chip
                  icon={
                     <Box component="img" src={icon} sx={{height: 20}} />
                  }
                  label={name}
                  sx={{display: 'inline-flex', gap: '.75rem', mb: 4, p: 3, bgcolor: color, borderRadius: '100vw', color: "#ffffff", fontSize: `clamp(.9rem, 2.2vw, 1.2rem)`}}
               />
               <Stack direction="row" spacing={2} sx={{alignItems: 'center'}} >
                  <Box dir="rtl" sx={{flexGrow: 1, direction: 'rtl'}} >
                     <LinearProgress
                        variant="determinate"
                        value={value}
                        sx={{
                           height: 6,
                           background: `color-mix(in srgb, ${ (theme.palette.mode === 'dark') ? 'black' : 'white' } 50%, ${color})`,
                           borderRadius: '100vw',
                           '& .MuiLinearProgress-bar': {
                              background: bgColor || color,
                           },
                        }}
                     />
                  </Box>
                  <Box>
                     <Typography variant="body2" color="text.secondary" >
                        {value}%
                     </Typography>
                  </Box>
               </Stack>
            </Typography>
         </Grid>
      </>
   );
}
 
export default AboutSkill;