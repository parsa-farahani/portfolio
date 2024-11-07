import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RandomReveal } from 'react-random-reveal'
// data/utils
import { socialData } from '../../constants/socials';
// components
import SidebarSocialLink from './SidebarSocialLink';
import ThemeActionButton from './ThemeActionButton';
// MUI
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
// icons
import { GitHub, Telegram, Instagram, LinkedIn } from '@mui/icons-material'
// images
import avatar from '../../assets/images/parsa.jpg';



const SidebarHeader = (props) => {
   // props
   const {inDrawer} = props;

   // states
   const [isPlayingRevealAnim, setIsPlayingRevealAnim] = useState(false);
   const [startPlayingSecondReveal, setStartPlayingSecondReveal] = useState(false);


   // Effects
   useEffect(() => {
      const revealTimeout = setTimeout(() => {
         setIsPlayingRevealAnim(true);
      }, 1000);

      return () => {
         clearTimeout(revealTimeout);
      }
   }, [])


   return (
      <Box sx={{position: 'relative', textAlign: 'center', alignItems: 'center', py: 2}} >
         <Avatar variant="circular" alt="parsa farahani" src={avatar} sx={{display: {xs: inDrawer ? 'block' : 'none', md: 'block'}, width: '15vmin', height: '15vmin', mx: 'auto'}} >
            PF
         </Avatar>
         <Typography variant="h6" component="h1" color="text.primary" aria-label="پارسا فراهانی" sx={{mt: 1}} >
            <span aria-hidden="true" >
               <RandomReveal onComplete={e => setStartPlayingSecondReveal(true)} isPlaying={isPlayingRevealAnim} duration={2} characterSet={["ا", "ف", "ت", "د", "ر", "ه"]} characters="پارسا فراهانی" />
            </span>
         </Typography>
         <Typography variant="body2" component="p" aria-label='توسعه دهده فرانت اند' color="text.secondary">
            <span aria-hidden="true" >
               <RandomReveal isPlaying={startPlayingSecondReveal} duration={1} characterSet={["ا", "ف", "ت", "د", "ر", "ه"]} characters="توسعه دهنده فرانت اند 🐦‍🔥" />
            </span>
         </Typography>

         <Stack direction="row" sx={{alignItems: 'center', justifyContent: 'center', pt: 2}} >
            {
               socialData.map((data, i) => (
                  <SidebarSocialLink key={i} title={data.title} href={data.href} icon={data.icon} />
               ))
            }
         </Stack>

         <ThemeActionButton />
      </Box>
   );
}

SidebarHeader.propTypes = {
   inDrawer: PropTypes.bool,
}
 
export default SidebarHeader;