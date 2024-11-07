import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Typed from "typed.js";
import TextTransition, {presets} from "react-text-transition";
// components
import BgParticles from "./components/BgParticles";
// contexts
import { MainContext } from "../context";
// MUI
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, keyframes, Stack, Typography, useMediaQuery } from "@mui/material";
// images
import avatar from '../assets/images/parsa.jpg';
// particles options
import { gradients, hexagon, links } from '../constants/particles';
// styles
import '../styles/Home.css';


const Home = (props) => {

   // props
   const { helmetTitle } = props;

   // states
   const [titleTransitionIndex, setTitleTransitionIndex] = useState(0);


   // refs
   const nameEl = useRef(null);
   const titlesEl = useRef(null);


   // Media Queries
   const theme = useTheme();
   const isMdUp = useMediaQuery( theme.breakpoints.up('md') );


   // titles data (for animation)
   const titles = useMemo(() => (
      [
         " توسعه دهنده فرانت اند هستم",
         "برنامه نویس نرم افزار هستم",
         "فریلنسر هستم",
      ]
   ), []);

   // type-animation setup
   useEffect(() => {
      // + typing name
      const typedName = new Typed(nameEl.current, {
         strings: ["پارسا فراهانی"],
         startDelay: 0,
         typeSpeed: 30,
         backSpeed: 20,
         backDelay: 10,
         showCursor: false,
      })
      
      // + typing titles (messages)
      // const typedTitles = new Typed(titlesEl.current, {
      //    strings: titles,
      //    startDelay: 1500,
      //    typeSpeed: 40,
      //    backSpeed: 30,
      //    backDelay: 10,
      //    loop: true,
      //    showCursor: false,
      // })

      // Animation cleanup
      return () => {
         typedName.destroy();
         // typedTitles.destroy();
      }
   }, [])

   // text-transition setup
   useEffect(() => {
      const textTransitionInterval = setInterval(() => {
         setTitleTransitionIndex(prevIndex => (prevIndex + 1) % titles.length);
      }, 3000)

      return () => {
         clearInterval(textTransitionInterval);
      }
   }, [])



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
            className="home-cont"

            sx={{
               position: 'relative',
               height: '100%',
               backgroundImage: `radial-gradient(circle at 50% -20%, transparent, 40%, #3d5afe80, transparent 70%)`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            
            {/* <BgParticles options={links} /> */}

            <Stack
               direction="column"
               sx={{
                  height: '30vh',
                  alignItems: 'center', 
                  justifyContent: 'center',
               }}
            >
               <Avatar
                  variant="circular"
                  alt="Parsa farahani"
                  src={avatar}
                  sx={{
                     width: 'calc(100px + 10vmin)',
                     height: 'calc(100px + 10vmin)',
                     mt: -10,
                     mb: 4
                  }}
               />
               <Typography
                  ref={nameEl}
                  variant={isMdUp ? 'h2' : 'h4'}
                  component="h1"
                  color="text.primary"
                  aria-label="پارسا فراهانی"
                  sx={{ textAlign: "center", mb: 4 }}
               >
               </Typography>
               <Stack direction="row" >
                  <Typography
                     variant={isMdUp ? 'h4' : 'h6'}
                     component="h2"
                     color="text.secondary"
                  >
                     من یک: 
                     {" "}
                     &nbsp;
                  </Typography>
                  <Typography
                     ref={titlesEl}
                     variant={isMdUp ? 'h4' : 'h6'}
                     component="h2"
                     color="text.secondary"
                     aria-label="توسعه دهنده فرانت اند"
                     sx={{ textAlign: "center" }}
                  >
                     <TextTransition direction="down" springConfig={presets.stiff} >
                        {
                           titles[titleTransitionIndex]
                        }
                     </TextTransition>
                  </Typography>
               </Stack>
            </Stack>

         </Box>
      </>
   );
}
 
export default Home;