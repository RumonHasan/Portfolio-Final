import { makeStyles } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../services/theme/colors";
// bg image
import home from '../../assets/images/home.JPG';

export const ProjectStyles = ()=>{
    const {mediumSize, smallScreen} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        root:{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${home})`,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            paddingTop: !mediumSize && theme.spacing(10),
        },
        filterBtnContainer:{
            margin: theme.spacing(8),
        },
        filterBtn:{
            border: `2px solid ${colors.secondBlue}`,
            color: colors.secondBlue,
            padding: theme.spacing(1),
            margin: theme.spacing(1),
            '&:hover':{
                transition: '450ms',
                background: colors.mainBlue,
                transform: 'scale(1.05)',
                color: colors.mainBlack,
            }
        },
        projectGrid:{
            width: '100%',
            transition: '850ms',
            
        },
        projectItem:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            width: '100%',
            height: smallScreen ? '300px':'450px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
            opacity: 0.6,
            background: colors.mainBlack,
            cursor: 'pointer',
            transition: '850ms',
            position:'relative',
            '&:hover':{
                transition: '450ms',
                opacity: 1,
                filter: 'brightness(1.2)',
            }
        },
        projectOpenBtn:{
            visibility: 'hidden',
            transform: 'scale(0)',
            transition: '450ms',
        },
        projectOpenBtnShow:{
            visibility: 'visible',
            transform:'scale(1)',
            transition: '450ms',
            borderRadius: '50%',
            padding:theme.spacing(4),
            color: colors.mainBlack,
            background: colors.secondBlue,
            filter: 'brightness(1.2)',
            '&:hover':{
                background: colors.mainBlue,
            }
        },
        projectButtonContainer:{
            width:'100%',
            height: '100%',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        // mobile select category
        selectForm:{
            minWidth: 180,
            borderRadius: 5,
        },
        select:{
            border: `1px solid ${colors.mainBlue}`,
            padding: theme.spacing(0.4),
            color:colors.mainBlue,
            '& .MuiSelect-icon':{
                color: colors.mainBlue,
            },
        },
        dropdownmenu:{
            backgroundColor:colors.secondBlue,
            color: colors.mattBlack,

        },
        selectItem:{
            color:colors.mattBlack,
        },
        underline:{
            color:colors.secondBlue,
        },
        // project briefing
        projectBriefContainer:{
            display: 'flex',
            justifyContent:'flex-start',
            flexDirection:'column',
            width: '100%',
            paddingLeft: theme.spacing(10),
        },
        projectHeader:{
            fontWeight:'bold',
            fontFamily: "'Acme', sans-serif",
            color:colors.secondBlue,
            fontSize: 'clamp(2rem, 10vw, 6rem)',
        },
        projectDescription:{
            fontFamily: "'Noto Sans', sans-serif",
            color:colors.primaryWhite,
            fontSize: 'clamp(0.5rem, 3vw, 1.5rem)',
            paddingTop:theme.spacing(3),
        }
      
    }))
    return {
        useStyles,
    }
}