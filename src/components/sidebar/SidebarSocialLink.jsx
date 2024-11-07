import PropTypes from "prop-types";
// MUI
import { IconButton } from "@mui/material";



const SidebarSocialLink = (props) => {

   const { title, href, icon } = props;



   return (
      <IconButton
         size="small"
         aria-label={title}
         href={href}
         target='_blank'
         rel="noopener noreferrer"
      >
         {
            icon
         }
      </IconButton>
   );
}


SidebarSocialLink.propTypes = {
   title: PropTypes.string,
   href: PropTypes.string,
   icon: PropTypes.node,
}


export default SidebarSocialLink;