import { makeStyles } from "@material-ui/core";
import { colors } from "../../services/theme/colors";
import { useGlobalContext } from "../../context/context";

export const FormStyles = ()=>{
    const{ smallScreen} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        dialogWrapper:{
            background: colors.mattBlack,
            transition:'450ms',
            width: '100%'
        },
        titleBox:{
            display: 'flex',
            justifyContent:'space-between',
            position:'relative',
            flexDirection:'column'
        },
        closeBtn:{
            background: colors.mattBlack,
            borderRadius: '50%',
            height: 60,
            width: 40,
            right:0,
            position: 'absolute',
            '&:hover':{
                background: colors.mattBlack,
                border:`1px solid ${colors.mainBlue}`,
                transition: '450ms',
            }
        },
        title:{
            color:colors.secondBlue,
            fontSize: 'clamp(2rem, 10vw, 4rem)',
            fontFamily: "'Acme', sans-serif",
            fontWeight:'bold',
            opacity: 0.8
        },
        titleText:{
            color: colors.primaryWhite,
            fontFamily: "'Noto Sans', sans-serif",
        },
        // form
        formRoot:{
            display: 'flex',
            justifyContent:'center',
            flexDirection:'column',
            width: smallScreen ? '90%': '70%',
            alignItems:'center',
            padding:theme.spacing(1),
            transition: '450ms',
        },
        formElements:{
            display: 'flex',
            justifyContent:'center',
            flexDirection:'column',
            width: '100%',
        },
        formHeaderInputs:{
            display:'flex',
        },
        inputField:{
            padding: theme.spacing(2),
            background: colors.lightMattBlack,
            outline: 'none !important',
            border: 'none',
            width: '100%',
            color:colors.primaryWhite
        },
        inputSpaces:{
            marginBottom:theme.spacing(0.7),
        },
        formButtons:{
            margin: theme.spacing(3),
            width: '100%',
            display:'flex',
            justifyContent:'flex-start',

        },
        submitBtn:{
            marginRight: theme.spacing(1),
            color:colors.mattBlack,
            background:colors.secondBlue,
            '&:hover':{
                background:colors.mainBlue,
                transition: '450ms',

            }
        },
        resetBtn:{
            color:colors.mattBlack,
            background:colors.secondBlue,
            '&:hover':{
                background:colors.mainBlue,
                transition: '450ms',

            }
        }
    }))
    return {
        useStyles,
    }
}