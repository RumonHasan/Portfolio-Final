import { makeStyles } from '@material-ui/core';
import React from 'react';
import { colors } from '../../services/theme/colors';

export const FootStyles = ()=>{
    const useStyles = makeStyles(theme=>({
        root:{
            height: '6vh',
            background: colors.mattBlack,
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
        }
    }));

    return {
        useStyles,
    }
}

