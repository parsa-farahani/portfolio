import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick";
// data/utils
import { userComments } from '../constants/details';
// components
import DividerTitle from './components/DividerTitle';
// MUI
import { Avatar, Box, Card, CardContent, Divider, Slide, Stack, Typography, useTheme } from "@mui/material"
import Grid from '@mui/material/Grid2';
// icons
import { FeedRounded, InsertCommentRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
// styles
import '../styles/Comments.css';






const Comments = (props) => {

   // props
   const { helmetTitle } = props;

   // states
   const [isMount, setIsMount] = useState(false);



   // MUI data
   const theme = useTheme();


   // Effects
   useEffect(() => {
      setIsMount(true);

      return () => {
         setIsMount(false);
      };
   }, []);


   // slider options
   const sliderOptions = {
      // arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
   };

   return (
      <>
         <Helmet>
            <title>
               {
                  helmetTitle
               }
            </title>
         </Helmet>
         <Box
            component="main"
            sx={{
               width: '100%',
               height: '100%',
               overflowY: 'auto',
               p: 3,
               display: 'flex',
               flexDirection: 'column',
            }}
         >
            <Slide
               direction="down"
               in={isMount}
               style={{
                  transitionDelay: isMount ? "200ms" : "0ms",
               }}
            >
               <Box>
                  <DividerTitle
                     title="نظرات افراد"
                     icon={<InsertCommentRounded />}
                     textAlign="center"
                     color={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
                     lineColor={ (theme.palette.mode === 'dark') ? 'primary.main' : 'secondary.main' }
                  />
               </Box>
            </Slide>
            <Box
               sx={{
                  width: '100%',
                  flexGrow: 1,
                  display: 'grid',
                  placeContent: 'center',
                  containerType: 'inline-size'
               }}
            >
               <Box
                  sx={{
                     width: '100cqi',
                  }}
               >
                  <Grid container justifyContent="center" alignItems="center" >
                     <Grid size={{xs: 10, md: 8, xl: 6}} maxWidth={1200} >
                        <Slider
                           {...sliderOptions}
                           style={{
                           }}
                        >
                           {
                              userComments.map((comment, i) => (
                                 <Box key={i} sx={{p: 1}} >
                                    <Card sx={{width: '100%', height: '400px', p: 0, borderRadius: '10px'}} >
                                       <CardContent sx={{width: '100%', height: '100%' , display: 'flex', flexDirection: 'column', p: 0, pb: '0px !important' }} >
                                          <Stack dir="rtl" direction="row" sx={{alignItems: 'center', gap: 2, p: 1}} >
                                             <Avatar variant="circular" alt="user avatar" src={comment.avatar} sx={{ width: '60px', height: '60px' }} />
                                             <Box>
                                                <Typography variant="h6" component="h3" >
                                                   {
                                                      comment.fullname
                                                   }
                                                </Typography>
                                                <Typography variant="caption" component="p" >
                                                   {
                                                      comment.jobTitle
                                                   }
                                                </Typography>
                                             </Box>
                                          </Stack>
                                          <Divider variant="fullWidth" />
                                          <Box sx={{height: 1, m: 2, p: 2, bgcolor: '#ffffff10', borderRadius: 2}} >
                                             <Typography dir="rtl" variant="body1" component="p" >
                                                {
                                                   comment.comment
                                                }
                                             </Typography>
                                          </Box>
                                       </CardContent>
                                    </Card>
                                 </Box>
                              ))
                           }
                        </Slider>
                     </Grid>
                  </Grid>
               </Box>
            </Box>
         </Box>
      </>
   );
}
 
export default Comments;