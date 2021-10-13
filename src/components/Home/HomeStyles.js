import { makeStyles } from "@material-ui/core";
import { colors } from "../../services/theme/colors";
import home from '../../assets/images/home.JPG';
import { useGlobalContext } from '../../context/context';

export const HomeStyles = ()=>{
    const {mediumSize} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        root:{
            height: '100vh',
            position: 'relative',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${home})`,
            backgroundSize:'cover',
        },
        // home design
        homeBox:{
            height: '100%',
        },
        homeTextBox:{
            padding: theme.spacing(5),
        },
        homeText:{
            color:colors.primaryWhite,
            fontWeight: 'bold',
            fontFamily: "'Acme', sans-serif",
            fontSize: 'clamp(1.5rem, 8vw, 4.5rem)',
            transition: '450ms',
            paddingLeft: theme.spacing(5),
        },
        subtitleText:{
            color: colors.primaryWhite,
            paddingLeft: theme.spacing(5),
            letterSpacing: theme.spacing(0.7),
            opacity: 0.7
        },
        contactBtn:{
            color:colors.secondBlue,
            margin: theme.spacing(4),
            cursor: 'none',
            width: '30%',
            border: `2px solid ${colors.secondBlue}`,
            '&:hover':{
                transition: '450ms',
                transform: 'scale(1.05)',
                background: colors.mainBlue,
                color: colors.mattBlack,
            }
        },
        cubeData:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '100%',
        },
        cubeBox:{
            display: 'flex',
            justifyContent: 'center',
            width: 350,
            height: 350,
            cursor:'none',
            animation: '$zoom 4s linear infinite',
            transition: '850ms',
        },
        '@keyframes zoom':{
          '0%':{
              transform: 'scale(1,1)'
          },
          '50%':{
              transform:'scale(1.07,1.07)'
          },
          '100%':{
              transform: 'scale(1,1)'
,          }
        }

    }))

    return {
        useStyles,
    }
}