import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import EllipsisText from "react-ellipsis-text";
// data/utils
import { courses } from "../constants/courses";
//components
import DividerTitle from "./components/DividerTitle";
// MUI
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Slide, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useTheme } from "@emotion/react";






const Courses = (props) => {

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
                  transitionDelay: isMount ? "100ms" : "0ms",
               }}
            >
               <Box>
                  <DividerTitle
                     title="دوره های من" 
                     color={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
                     lineColor={ (theme.palette.mode === 'dark') ? 'primary.main' : 'secondary.main' }
                  />
               </Box>
            </Slide>
            <Grid container maxWidth={1200} spacing={2} alignItems="stretch" justifyItems="stretch" sx={{mx: 'auto', py: 4}} >
               {
                  courses.map((course, i) => (
                     <Slide
                        key={i}
                        timeout={500}
                        direction="up"
                        in={isMount}
                        style={{
                           transitionDelay: isMount
                              ? `${i * 100 + 200}ms`
                              : "0ms",
                        }}
                     >
                        <Grid size={{xs: 12, sm: 6, lg: 4}} >
                           <Card sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}} >
                              <CardActionArea
                                 href={course.link} 
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >

                                 <CardMedia
                                    component="img"
                                    height="200"
                                    image={course.image}
                                    alt="course image"
                                 />
                                 
                                 <CardContent>
                                    <Typography
                                       variant="h6"
                                       component="h3"
                                    >
                                       {
                                          course.title
                                       }
                                    </Typography>
                                    <Typography
                                       variant="body1"
                                       component="p"
                                    >
                                       <EllipsisText text={course.info} length={100} />
                                    </Typography>
                                 </CardContent>
                              </CardActionArea>
                              <CardActions sx={{mt: 'auto'}} >
                                 <Button
                                    variant="outlined"
                                    color={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
                                    href={course.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                 >
                                    اطلاعات بیشتر
                                 </Button>
                              </CardActions>
                           </Card>
                        </Grid>
                     </Slide>
                  ))
               }
            </Grid>
         </Box>
      </>
   );
}
 
export default Courses;