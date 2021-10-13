import { makeStyles } from "@material-ui/core";
import { colors } from "../../services/theme/colors";
import { fontSize } from "../../services/fontSize";
import { useGlobalContext } from "../../context/context";
import home from '../../assets/images/home.JPG';
export const HeaderStyle = ()=>{
    const {smallScreen} = useGlobalContext();
    const useStyle = makeStyles(theme=>({
        root:{
            position: 'fixed',
            right: '0',
            padding: theme.spacing(1.5),
            transition: '400ms',
            zIndex: 110,
        },
        menuButton:{
            top: 0,
            position: 'sticky',
            background: colors.mainBlack,
            height: fontSize.xtraMedLarge,
            width: fontSize.large,
            zIndex: 999,
            '&:hover':{
                background: colors.mainBlack,
            }
        },
        icon:{
            fontSize: fontSize.xtralarge,
            color: colors.primaryWhite
        },
        // drawer:
        drawerPaper:{
            width: '100%',
            background: colors.mattBlack,
            position: 'relative',
        },
        menuHeader:{
            height: '35vh',
            backgroundImage: `url(${home})`,
            backgroundSize:'cover',
        },
        menuList:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:'column',
            marginTop: theme.spacing(4.5),
        },
        closeBtn:{
            position: 'absolute',
            right: 0,
            zIndex: 1,
            margin: theme.spacing(1.5),
            background: 'transparent',
            
        },
        closeIcon:{
            fontSize:fontSize.xtralarge,
            color:colors.primaryWhite,
            fontWeight:'bold',
        },
        letter:{
            fontWeight: 'bold',
            color: colors.primaryWhite,
    
        },
        sideLogoBox:{
            marginTop: theme.spacing(6),
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
        // menuitems
        menuItems:{
            opacity: 0.5,
            color: colors.primaryWhite,
            transition: '850ms',
            textTransform: 'uppercase',
            margin: theme.spacing(0.5),
            borderBottom: `0.3px solid ${colors.primaryWhite}`,
            '&:hover':{
                transition: '850ms',
                color: colors.mainBlue,
                opacity: 1,
                borderBottom: `0.3px solid ${colors.mainBlue}`,
            }
        },
        snsBox:{
            marginTop: smallScreen ? theme.spacing(1) :theme.spacing(7),
        },
    
        snsIconBtn:{
            color: colors.primaryWhite,
            opacity: 0.3,
            '&:hover':{
                color:colors.mainBlue,
                transition: '850ms',
                opacity: 1,
            }
        }
    }))
    return {
        useStyle,
    }
}
