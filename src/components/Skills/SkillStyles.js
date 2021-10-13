import React from 'react';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../services/theme/colors';
import { useGlobalContext } from '../../context/context';

export const SkillStyles = ()=>{
    const {smallScreen} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        root:{
            background: colors.secondDark,
            position: 'relative',
            paddingBottom: theme.spacing(10),
            paddingTop: theme.spacing(4),
        },
        // skill water mark design
        skillMarkContainer:{
            position:'absolute',
            left: -55,
        },
        skillMark:{
            fontFamily: "'Luckiest Guy', cursive",
            fontWeight: 1000,
            padding: theme.spacing(7),
            letterSpacing: 5,
            [theme.breakpoints.down('600')]:{
                fontSize: '100px',
            },
            [theme.breakpoints.up('600')]:{
              fontSize: '170px'  
            },
            [theme.breakpoints.up('800')]:{
                fontSize: '200px'  
              },
            [theme.breakpoints.up('1200')]:{
            fontSize: '250px'  
            },
            [theme.breakpoints.up('1400')]:{
                fontSize: '280px'  
            },
            textTransform: 'uppercase',
            color: colors.primaryWhite,
            opacity: 0.08,
            transition: '450ms',
            marginRight: '20px',
           
        },
        // skill container
        skillContainer:{
            display:'flex',
            justifyContent:'flex-start',
            flexDirection:'column',
            height: '100%',
            alignItems:'center',
            paddingTop: theme.spacing(5),
        },
        skillBox:{
            width: '80%',
            padding: theme.spacing(2),
            margin: theme.spacing(1),
            border: `2px solid ${colors.primaryWhite}`,
            borderRadius: '10px',
            opacity:0.8
        },
        skillLevel:{
            height: '100%',
            display: 'flex',
            alignItems:'center',
            transition: '450ms ease-out',
            opacity: 0,
            justifyContent:'space-between',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: '5px',
        }
    }))

    return {
        useStyles,
    }
}