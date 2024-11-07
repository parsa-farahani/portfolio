
// MUI
import { Chip, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";




const DividerTitle = (props) => {

   // props
   const { title="", textAlign="center", color="white", lineColor="#ffffff40", icon=null } = props;


   return (
      <Divider
         textAlign={textAlign}
         sx={{
            mb: 4,
            '&::before, &::after' : {
               borderColor: lineColor,
            }
         }}
      >
         <Chip
            dir="ltr"
            variant="outlined"
            label={
               <Typography variant="h6" component="h2" >
                  {
                     title
                  } 
               </Typography>
            }
            icon={icon}
            color={color}
            sx={{
               p: 3,
               px: 4,
               borderRadius: '100vw'
            }}  
         />
      </Divider>
   );
}

DividerTitle.propTypes = {
   title: PropTypes.string,
   textAlign: PropTypes.string,
}
 
export default DividerTitle;