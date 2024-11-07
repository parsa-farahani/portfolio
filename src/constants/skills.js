// icons
import htmlIcon from '../assets/icons/html5-original.svg';
import cssIcon from '../assets/icons/css3-original.svg';
import jsIcon from '../assets/icons/javascript-original.svg';
import gitIcon from '../assets/icons/git-original.svg';
import reactIcon from '../assets/icons/react-original.svg';
// colors
import { blue, deepPurple, indigo, red, yellow } from '@mui/material/colors';

export const devSkills = {
   htmlSkill: {
      id: 0,
      name: 'HTML',
      value: 90,
      icon: htmlIcon,
      color: '#006064',
   },
   cssSkill: {
      id: 1,
      name: 'CSS',
      value: 78,
      icon: cssIcon,
      color: '#9c27b0',
   },
   jsSkill: {
      id: 2,
      name: 'JS',
      value: 82,
      icon: jsIcon,
      color: blue[800],
   },
   reactSkill: {
      id: 3,
      name: 'React',
      value: 70,
      icon: reactIcon,
      color: indigo[800],
   },
}