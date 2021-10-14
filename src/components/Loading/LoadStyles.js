import React from 'react';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../services/theme/colors';

export const LoadStyles = ()=>{
    const useStyles = makeStyles(theme=>({
        root:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            background: colors.secondMattBlack,
        }
    }))
    return {
        useStyles
    }
}