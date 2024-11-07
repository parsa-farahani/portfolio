import PropTypes from "prop-types";
// MUI
import { Box, Typography } from "@mui/material";
import { purple, A100 } from "@mui/material/colors";
// icons
import { RadioButtonCheckedOutlined, TokenOutlined } from "@mui/icons-material";




const AboutDevInfo = (props) => {
   // props
   const { name, value } = props;

   return (
      <>
         <Typography component="dt" sx={{ fontSize: 'clamp(.9rem, 2vw, 1.2rem)' }} >
            <TokenOutlined sx={{verticalAlign: 'middle', mr: 1, height: 20, color: 'secondary.light'}} />
            {name}:
         </Typography>
         <Typography component="dd" sx={{ fontSize: 'clamp(.8rem, 2vw, 1.2rem)' }} >
            {value}
         </Typography>
      </>
   );
}


AboutDevInfo.propTypes = {
   name: PropTypes.string,
   value: PropTypes.string,
}

export default AboutDevInfo;