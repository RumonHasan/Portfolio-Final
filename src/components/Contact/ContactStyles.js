import { makeStyles } from '@material-ui/core';
import React from 'react';
import { colors } from '../../services/theme/colors';
import { useGlobalContext } from '../../context/context';

export const ContactStyles = ()=>{
    const{smallScreen} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        root:{
            background:colors.secondDark,
        },
        container:{
            paddingTop:theme.spacing(10),
            width: '100%',
            background: colors.mattBlack,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        },
        contactTitle:{
            fontWeight:'bold',
            fontFamily: "'Acme', sans-serif",
            color:colors.secondBlue,
            fontSize: 'clamp(2rem, 10vw, 6rem)',
            whiteSpace:'nowrap',
            margin:theme.spacing(5),
        },
        // contact text:
        contactText:{
            fontFamily: "'Noto Sans', sans-serif",
            color:colors.primaryWhite,
            fontSize: 'clamp(0.5rem, 3vw, 1.5rem)',
            paddingTop:theme.spacing(3),
            marginLeft: theme.spacing(7),
        },
        // form
        formContainer:{

        },
               // form
               formRoot:{
                display: 'flex',
                justifyContent:'center',
                flexDirection:'column',
                width: '90%',
                alignItems:'center',
                padding:theme.spacing(1),
                transition: '450ms',
                paddingLeft:theme.spacing(5),
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
                color:colors.primaryWhite,
                margin: theme.spacing(1.5),
            },
            inputSpaces:{
                marginBottom:theme.spacing(0.7),
            },
            formButtons:{
                margin: theme.spacing(3),
                width: '100%',
                display:'flex',
                justifyContent:'flex-start',
                paddingLeft: theme.spacing(5),
    
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
        useStyles
    }
}