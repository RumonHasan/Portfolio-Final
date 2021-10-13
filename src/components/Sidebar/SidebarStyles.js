import { makeStyles } from "@material-ui/core";
import { spacer } from "../../services/spacer";
import { colors } from "../../services/theme/colors";
import { useGlobalContext } from "../../context/context";
import { fontSize } from "../../services/fontSize";

export const SidebarStyles = ()=>{
    const {mediumScreen} = useGlobalContext();

    const useStyles = makeStyles(theme=>({
        root:{
            width: mediumScreen ? 0 : `${spacer.sideBarWidth}px`,
            background: colors.mattBlack,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            left: 0,
            transition: '850ms',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflow: 'hidden' ,
            zIndex: 10,
        },
        letter:{
            fontWeight: 'bold',
            color: colors.primaryWhite,

        },
        // "@keyframes spin":{ // letter animations
        //     "0%":{ transform: 'rotateY(0deg)',
        //     transition: '850ms ease-in-out',
        //     color: colors.primaryWhite,
        //     },
        //     "100%":{ transform: 'rotateY(360deg)',
        //     transition: '850ms ease-in-out',
        //     color: colors.mainBlue

        //     }
        // },
        sideLogoBox:{
            background: colors.mainBlack,
            width: '100%',
        },
        name:{
            color:colors.primaryWhite,
            letterSpacing: theme.spacing(0.5),
        },
        designation:{
            color:colors.primaryWhite,
            fontSize: '13px',
            whiteSpace: 'nowrap',
            paddingTop: theme.spacing(3),
            opacity: 0.5,
        },
        // side menu items:
        sideMenuBox:{
            marginTop: theme.spacing(3),
        },
        menuButton:{
            width: '120px',
            margin: theme.spacing(1.5),
            opacity: 0.5,
            color: colors.primaryWhite,
            '&:hover':{
                transition: '400ms',
                color: colors.mainBlue,
                opacity: 1,
            }
        },
        activeLink:{
            color: colors.mainBlue,
            border: `1px solid ${colors.mainBlue}`,
            height: '80%',
        },
        // sns icons
        snsBox:{
            marginTop: theme.spacing(2),
        },
        icons:{
            color: colors.primaryWhite,
            opacity: 0.5,
            '&:hover':{
                color:colors.mainBlue,
                transition: '850ms',
                opacity: 1,
            }
        }
    }))

    return {
        useStyles,
    }
}
