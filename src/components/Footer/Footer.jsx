import React,{useState} from 'react';
import { FootStyles } from './FootStyles';
import { motion } from 'framer-motion';
import {Typography} from '@material-ui/core';
import {colors} from '../../services/theme/colors';

const Footer = ()=>{
    const {useStyles} = FootStyles();
    const classes = useStyles();
    return (
        <motion.div className={classes.root}>
            <Typography variant='h5' style={{color:colors.mainBlue, fontSize: '20px', 
            fontFamily: "'Acme', sans-serif"}}>
                Mahmudul Hasan Rumon @2021
            </Typography>
        </motion.div>
    )
}

export default Footer;