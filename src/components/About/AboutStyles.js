import { makeStyles } from "@material-ui/core";
import { colors } from "../../services/theme/colors";

export const AboutStyles = ()=>{
    const useStyles = makeStyles(theme=>({
        root:{
            background: colors.secondDark,
            paddingTop: theme.spacing(5),
        },
        aboutBox:{
            height:'100%',
        },
        aboutTextbox:{
            paddingLeft: theme.spacing(5),
        },
        aboutTitle:{
            fontFamily: "'Acme', sans-serif",
            color: colors.mainBlue,
            fontSize: 'clamp(2rem, 10vw, 5rem)',
            fontWeight:'bold',
        },
        aboutTextOne:{
            fontFamily: "'Noto Sans', sans-serif",
            color:colors.primaryWhite,
            fontSize: 'clamp(0.5rem, 3vw, 1.2rem)',
            paddingRight: theme.spacing(2),
            fontWeight:'bold',
        },
        contactLinkText:{
            fontFamily: "'Noto Sans', sans-serif",
            color:colors.secondBlue,
            fontSize: 'clamp(0.5rem, 3vw, 1.2rem)',
            paddingRight: theme.spacing(2),
            fontWeight:'bold',
            textDecoration: 'underline',
            opacity: 0.8,
            '&:hover':{
                color:colors.mainBlue,
                opacity: 1,
                cursor:'pointer',
            }
        },// profile image
        profileImg:{
            [theme.breakpoints.down('600')]:{
                clipPath: "circle(150px at 50% 50%)",
            },
            [theme.breakpoints.up('600')]:{
                clipPath: "circle(200px at 50% 50%)", 
            },
            [theme.breakpoints.up('900')]:{
                clipPath: "circle(250px at 50% 50%)", 
            },
            [theme.breakpoints.up('1200')]:{
                clipPath: "circle(300px at 50% 50%)", 
            },
            opacity: 0.6,
            width:'100%',
            transition: '450ms ease-out',
            
        }
    }))
    return {
        useStyles
    }
}