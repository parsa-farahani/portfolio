import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// data/utils
import { devEdu } from "../constants/details";
// components
import DividerTitle from "./components/DividerTitle";
// MUI
import { Box, Chip, Divider, Slide, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
   Timeline,
   TimelineConnector,
   TimelineContent,
   TimelineDot,
   TimelineItem,
   TimelineOppositeContent,
   TimelineSeparator,
} from "@mui/lab";
import { blue, green, grey } from "@mui/material/colors";
// icons
import {
   CheckCircleRounded,
   CheckRounded,
   FeedRounded,
   SchoolRounded,
   SouthRounded,
   WorkRounded,
} from "@mui/icons-material";









const Resume = (props) => {
   const [isMount, setIsMount] = useState(false);

   // props
   const { helmetTitle } = props;



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
            <title>{helmetTitle}</title>
         </Helmet>
         <Box
            component="main"
            sx={{
               height: "100%",
               overflowY: "auto",
               p: 3,
               display: "flex",
               flexDirection: "column",
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
                     title="رزومه من"
                     icon={<FeedRounded />}
                     textAlign="center"
                     color={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
                     lineColor={ (theme.palette.mode === 'dark') ? 'primary.main' : 'secondary.main' }
                  />
               </Box>
            </Slide>

            <Grid container sx={{ flexGrow: 1, placeContent: "center" }}>
               <Grid size={{ xs: 12, md: 6 }}>
                  <Slide
                     direction="down"
                     in={isMount}
                     style={{
                        transitionDelay: isMount ? "400ms" : "0ms",
                     }}
                  >
                     <Box>
                        <DividerTitle
                           title="تحصیلات"
                           icon={<SchoolRounded />}
                           textAlign="center"
                           color={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
                           lineColor={ (theme.palette.mode === 'dark') ? 'primary.main' : 'secondary.main' }
                        />
                     </Box>
                  </Slide>
                  <Timeline position="alternate">
                     {devEdu.map((edu, i) => (
                        <Slide
                           key={i}
                           timeout={500}
                           direction="up"
                           in={isMount}
                           style={{
                              transitionDelay: isMount
                                 ? `${i * 100 + 400}ms`
                                 : "0ms",
                           }}
                        >
                           <TimelineItem>
                              <TimelineOppositeContent
                                 sx={{ color: grey[600] }}
                              >
                                 {edu.year}
                              </TimelineOppositeContent>
                              <TimelineSeparator>
                                 <TimelineDot variant="outlined">
                                    <CheckCircleRounded
                                       sx={{ color: "secondary.light" }}
                                    />
                                 </TimelineDot>
                                 {i < devEdu.length - 1 && (
                                    <TimelineConnector />
                                 )}
                              </TimelineSeparator>
                              <TimelineContent>
                                 <Typography variant="body1">
                                    {edu.cert}
                                 </Typography>
                                 <Typography variant="body2">
                                    {edu.major}
                                 </Typography>
                                 <Typography variant="caption">
                                    {edu.place}
                                 </Typography>
                                 <br />
                                 <br />
                                 <br />
                              </TimelineContent>
                           </TimelineItem>
                        </Slide>
                     ))}
                  </Timeline>
               </Grid>

               <Grid size={{ xs: 12, md: 6 }}>
                  <Slide
                     direction="down"
                     in={isMount}
                     style={{
                        transitionDelay: isMount ? "400ms" : "0ms",
                     }}
                  >
                     <Box>
                        <DividerTitle
                           title="تجربیات"
                           icon={<WorkRounded />}
                           textAlign="center"
                           color={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
                           lineColor={ (theme.palette.mode === 'dark') ? 'primary.main' : 'secondary.main' }
                        />
                     </Box>
                  </Slide>

                  <Timeline position="alternate">
                     {devEdu.map((edu, i) => (
                        <Slide
                           key={i}
                           timeout={500}
                           direction="up"
                           in={isMount}
                           style={{
                              transitionDelay: isMount
                                 ? `${i * 100 + 400}ms`
                                 : "0ms",
                           }}
                        >
                           <TimelineItem>
                              <TimelineOppositeContent
                                 sx={{ color: grey[600] }}
                              >
                                 {edu.year}
                              </TimelineOppositeContent>
                              <TimelineSeparator>
                                 <TimelineDot variant="outlined">
                                    <CheckCircleRounded
                                       sx={{ color: "primary.light" }}
                                    />
                                 </TimelineDot>
                                 {i < devEdu.length - 1 && (
                                    <TimelineConnector />
                                 )}
                              </TimelineSeparator>
                              <TimelineContent>
                                 <Typography variant="body1">
                                    {edu.cert}
                                 </Typography>
                                 <Typography variant="body2">
                                    {edu.major}
                                 </Typography>
                                 <Typography variant="caption">
                                    {edu.place}
                                 </Typography>
                                 <br />
                                 <br />
                                 <br />
                              </TimelineContent>
                           </TimelineItem>
                        </Slide>
                     ))}
                  </Timeline>
               </Grid>
            </Grid>
         </Box>
      </>
   );
};

export default Resume;
