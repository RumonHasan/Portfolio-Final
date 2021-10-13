import { createTheme } from "@material-ui/core";
import { colors } from "./colors";

export const darkTheme = createTheme({
    palette:{
      type: 'dark'
    }
  })

export const lightTheme = createTheme({
    palette:{
        type: 'light',
    }
})

export const theme = createTheme({
    palette:{
        
    },
    overrides:{
      MuiButton:{
        
      },
      MuiAppBar:{
        colorPrimary:{
          backgroundColor:colors.lightMattBlack
        }
      }
    }
})