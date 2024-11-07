import { createTheme } from "@mui/material";
import { purple, pink } from "@mui/material/colors";

// Note: MUI theme
const sharedStyles = {
   typography: {
     fontFamily: 'vazir, roboto',
     button: {
      textTransform: 'none'
     }
   },
   components: {
      MuiSlider: {
         defaultProps: {
            step: 1
         }
      },
      MuiButtonBase: {
         defaultProps: {
            // centerRipple: true,
            disableRipple: true,
            disableTouchRipple: true,
         }
      },
      MuiButton: {
         styleOverrides: {
            root: {
               textTransform: 'none',
            },
            
         },
         variants: [
            {
               props: {variant: 'grad'},
               style: {
                  backgroundImage: `linear-gradient(130deg, ${pink[200]}, ${purple[600]})`
               }
            }
         ]
      },
      MuiAvatar: {
         variants: [
            {
               props: {variant: 'rounded'},
               style: {
                  borderRadius: 8,
               }
            }
         ]
      }
   }
}

export const darkTheme = createTheme({
   direction: 'rtl',
   palette: {
      mode: 'dark',
      common: {
         black: '#000',
         white: '#fff',
      },
      primary: {
         main: '#0091ea',
      },
      secondary: {
         main: '#304ffe',
      },
      background: {
         paper: '#000',
         default: '#000',
         sidebar: '#111',
      },
      tab: {
         primary: '#ffffff20',
         secondary: '#ffffff10',
      }
   },
   ...sharedStyles,
})

export const lightTheme = createTheme({
   direction: 'rtl',
   palette: {
      mode: 'light',
      common: {
         black: '#000',
         white: '#fff',
      },
      primary: {
         main: '#0091ea',
      },
      secondary: {
         main: '#304ffe',
      },
      background: {
         paper: '#fff',
         default: '#fff',
         sidebar: '#ddd',
      },
      tab: {
         primary: '#00000020',
         secondary: '#00000010',
      }
   },
   ...sharedStyles,
})