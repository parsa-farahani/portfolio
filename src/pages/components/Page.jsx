import PropTypes from "prop-types";
// MUI
import { Box } from "@mui/material";

const Page = (props) => {
   // props
   const { children, pageNumber, index, ...restProps } = props;

   return (
      <>
         { /* with 'react-swipeable-views' */ }
         {/* <div
            dir="rtl"
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`navtab-${index}`}
            {...restProps}
         >
            {
               <Box
                  sx={{
                     height: '100svh',
                     overflowY: 'auto',
                     overflowX: 'hidden',
                  }}
               >
                  {children}
               </Box>
            }
         </div> */}

         { /* without 'react-swipeable-views' */ }
         <div
            dir="rtl"
            role="tabpanel"
            hidden={pageNumber !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`navtab-${index}`}
            {...restProps}
         >
            {
               (pageNumber === index) && (
                  <Box
                     sx={{
                        height: '100svh',
                        overflow: 'hidden'
                     }}
                  >
                     {children}
                  </Box>
               )
            }
         </div>
      </>
   );
};

Page.propTypes = {
   children: PropTypes.node,
   pageNumber: PropTypes.number,
   index: PropTypes.number,
};

export default Page;
