import { useCallback, useContext, useEffect, useState } from "react";
import { produce } from "immer";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
// data/utils
import { devSkills } from "../constants/skills";
import { careerInfo } from "../constants/details";
import {
   elastic,
   linear,
   makeEaseOut,
   quad,
} from "../constants/timingFunctions";
// components
import BgParticles from "./components/BgParticles";
// contexts
import { MainContext } from "../context";
// MUI
import {
   Avatar,
   Box,
   Card,
   CardContent,
   Chip,
   Divider,
   List,
   ListItem,
   Stack,
   Tooltip,
   Typography,
} from "@mui/material";
import Grid from "@mui//material/Grid2";
// particles options
import { gradients } from "../constants/particles";
// images
import avatar from "../assets/images/parsa.jpg";
import { CodeRounded, PersonRounded } from "@mui/icons-material";
import AboutDevInfo from "./components/AboutDevInfo";
import DividerTitle from "./components/DividerTitle";
import AboutSkill from "./components/AboutSkill";
import { useTheme } from "@emotion/react";











const About = (props) => {
   // props
   const { helmetTitle } = props;

   // states
   const [htmlProgress, setHtmlProgress] = useState(0);
   const [cssProgress, setCssProgress] = useState(0);
   const [jsProgress, setJsProgress] = useState(0);
   const [reactProgress, setReactProgress] = useState(0);


   // MUI data
   const theme = useTheme();


   // callbacks
   const animate = useCallback(
      ({ setStateFunc, totalValue, timing, draw, duration }) => {
         const startTime = performance.now();

         requestAnimationFrame(function animate(curntTime) {
            let timeFraction = (curntTime - startTime) / duration;
            if (timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction);

            draw(setStateFunc, progress, totalValue);

            if (timeFraction < 1) {
               requestAnimationFrame(animate);
            }
         });
      },
      []
   );

   const draw = useCallback((setStateFunc, progress, totalValue) => {
      setStateFunc(Math.ceil(progress * totalValue));
   }, []);

   // Effects
   useEffect(() => {
      animate({
         setStateFunc: setHtmlProgress,
         totalValue: devSkills.htmlSkill.value,
         timing: linear,
         draw: draw,
         duration: 2000,
      });

      animate({
         setStateFunc: setCssProgress,
         totalValue: devSkills.cssSkill.value,
         timing: makeEaseOut(quad),

         draw: draw,
         duration: 2000,
      });

      animate({
         setStateFunc: setJsProgress,
         totalValue: devSkills.jsSkill.value,
         timing: makeEaseOut(quad),

         draw: draw,
         duration: 2000,
      });

      animate({
         setStateFunc: setReactProgress,
         totalValue: devSkills.reactSkill.value,
         timing: makeEaseOut(quad),

         draw: draw,
         duration: 4000,
      });

      // const progressInterval = setInterval(() => {
      //    setHtmlProgress(curntHtmlProgress => {
      //       const diff = Math.round( Math.random() * 10 );
      //       return Math.min(curntHtmlProgress + diff, devSkills.htmlSkill.value)
      //    });

      //    setCssProgress(curntCssProgress => {
      //       const diff = Math.round( Math.random() * 10 );
      //       return Math.min(curntCssProgress + diff, devSkills.cssSkill.value)
      //    });

      //    setJsProgress(curntJsProgress => {
      //       const diff = Math.round( Math.random() * 10 );
      //       return Math.min(curntJsProgress + diff, devSkills.jsSkill.value)
      //    });

      //    setReactProgress(curntReactProgress => {
      //       const diff = Math.round( Math.random() * 10 );
      //       return Math.min(curntReactProgress + diff, devSkills.reactSkill.value)
      //    });

      // }, 50)

      // return () => {
      //    clearInterval(progressInterval);
      // }
   }, []);

   const { htmlSkill, cssSkill, jsSkill, reactSkill } = devSkills;

   return (
      <>
         <Helmet>
            <title>{helmetTitle}</title>
         </Helmet>
         <Box
            component="main"
            sx={{
               height: "100%",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "center",
               overflowY: "auto",
            }}
         >
            <Box
               maxWidth={1200}
               sx={{
                  position: "relative",
                  zIndex: "1",
                  width: "100%",
                  height: "100%",
                  px: 2,
                  py: { xs: 1, md: 10 },
               }}
            >
               <Grid container spacing={3} sx={{ mx: "auto" }}>
                  <Grid size={{ xs: 0, md: 3 }}>
                     <Box
                        sx={{
                           width: "100%",
                           display: "flex",
                           aspectRatio: "1 / 1",
                           justifyContent: "center",
                        }}
                     >
                        <Avatar
                           variant="rounded"
                           alt="Parsa Farahani"
                           src={avatar}
                           sx={{
                              width: "min(250px, 100%)",
                              height: "min(250px, 100%)",
                              display: "block",
                              mx: "auto",
                              borderRadius: 2,
                           }}
                        >
                           PF
                        </Avatar>
                     </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 9 }}>
                     <Card
                        variant="outlined"
                        sx={{
                           background: "#ffffff10",
                           boxShadow: "0",
                           borderRadius: 2,
                        }}
                     >
                        <CardContent sx={{ background: "transparent" }}>
                           <DividerTitle
                              title="اطلاعات شخصی"
                              icon={<PersonRounded />}
                              textAlign="left"
                              color={ (theme.palette.mode === 'dark') ? 'primary' : 'secondary' }
                              lineColor={ (theme.palette.mode === 'dark') ? 'primary.main' : 'secondary.main' }
                           />

                           <Grid container>
                              <Grid size={{ xs: 12, md: 8 }}>
                                 <Box
                                    component="dl"
                                    sx={{
                                       width: "100%",
                                       display: "grid",
                                       gridTemplateColumns: "1fr 2fr",
                                       justifyItems: "start",
                                       rowGap: 2,
                                       m: 0,
                                    }}
                                 >
                                    <AboutDevInfo
                                       name="نام"
                                       value="پارسا فراهانی"
                                    />
                                    <AboutDevInfo
                                       name="شماره تلفن"
                                       value="09926899788"
                                    />
                                    <AboutDevInfo
                                       name="ایمیل"
                                       value="aiparsa83@gmail.com"
                                    />
                                 </Box>
                              </Grid>

                              <Grid
                                 size={{ xs: 0, md: 4 }}
                                 sx={{ overflow: "hidden" }}
                              >
                                 <Stack
                                    direction="column"
                                    sx={{
                                       width: "100%",
                                       height: "100%",
                                       justifyContent: "center",
                                    }}
                                 >
                                    {careerInfo.map((info, i) => (
                                       <Tooltip
                                          key={i}
                                          title={info.tooltipTitle}
                                          placement="right"
                                          arrow
                                       >
                                          <Chip
                                             icon={info.icon}
                                             label={
                                                <Typography variant="body1">
                                                   {
                                                      <CountUp
                                                         end={info.total}
                                                         duration={5}
                                                      />
                                                   }
                                                </Typography>
                                             }
                                             variant="outlined"
                                             color={info.color}
                                             sx={{
                                                borderColor: info.color,
                                                mb: 1,
                                             }}
                                          />
                                       </Tooltip>
                                    ))}
                                 </Stack>
                              </Grid>
                           </Grid>
                        </CardContent>
                     </Card>
                  </Grid>
               </Grid>

               <Divider sx={{ my: 3 }} />

               <Grid container>
                  <AboutSkill
                     name={htmlSkill.name}
                     value={htmlProgress}
                     icon={htmlSkill.icon}
                     color={htmlSkill.color}
                     bgColor={`linear-gradient(90deg, ${htmlSkill.color}, 30%, springgreen)`}
                  />
                  <AboutSkill
                     name={cssSkill.name}
                     value={cssProgress}
                     icon={cssSkill.icon}
                     color={cssSkill.color}
                     bgColor={`linear-gradient(90deg, ${cssSkill.color}, 30%, crimson)`}
                  />
                  <AboutSkill
                     name={jsSkill.name}
                     value={jsProgress}
                     icon={jsSkill.icon}
                     color={jsSkill.color}
                     bgColor={`linear-gradient(90deg, ${jsSkill.color}, 30%, cyan)`}
                  />
                  <AboutSkill
                     name={reactSkill.name}
                     value={reactProgress}
                     icon={reactSkill.icon}
                     color={reactSkill.color}
                     bgColor={`linear-gradient(90deg, ${reactSkill.color}, 30%, blue)`}
                  />
               </Grid>
            </Box>
         </Box>
      </>
   );
};

export default About;
