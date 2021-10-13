import React,{useState, useEffect} from 'react';
// context
import { useGlobalContext } from '../../context/context';
// style
import { HomeStyles } from './HomeStyles';
// framer motion
import { motion } from 'framer-motion';
// sub components
import Header from '../Header/Header';
// material ui
import { Box, Typography, Grid, Button } from '@material-ui/core';
// data
import { hiText, jobText, nameText } from '../../services/data';
// cube
import Cube from './Cube';

const Home = () => {
    const {useStyles} = HomeStyles(); 
    const classes = useStyles();
    const {mediumScreen,openContactForm} = useGlobalContext();
    // cube functions
    const [cubeSize, setCubeSize] = useState(350);
    const [cubeControl, setCubeControl] = useState(0)
    const sides = ['front','top', 'right', 'left', 'bottom', 'back'];

    // intro letter animation
    const headerSentence = {
        hidden:{
            opacity: 1
        },
        visible:{
            opacity: 1,
            transition: {
                delay: 0.7,
                staggerChildren: 0.15
            }
        }
    }
    const letterAnimate = {
        hidden: {
            opacity: 0, y: 50
        },
        visible:{
            opacity: 1,
            y: 0
        }
    }

    return (
        <div className={classes.root} id='Home'>
            <Header/>
            <Box className={classes.homeBox} alignItems='center' display='flex' justifyContent='center'>
                <Grid container alignItems='center'>
                    <Grid item xs={12} md={12} lg={6}>
                        <Box display='flex' className={classes.homeTextBox} flexDirection='column'>
                            <motion.h3 className={classes.homeText} variants={headerSentence} initial='hidden' animate='visible'>
                               {hiText.split('').map((letter, index)=>{
                                   return (
                                       <motion.span variants={letterAnimate} key={index}>{letter} </motion.span>
                                   )
                               })}
                               <br/>
                               {nameText.split('').map((letter, index)=>{
                                   return (
                                       <motion.span variants={letterAnimate} key={index}>{letter} </motion.span>
                                   )
                               })} 
                               <br/>
                               {jobText.split('').map((letter, index)=>{
                                   return (
                                       <motion.span variants={letterAnimate} key={index}>{letter} </motion.span>
                                   )
                               })}  
                            </motion.h3>
                            <Typography className={classes.subtitleText} variant='subtitle1'>Front End Developer / React Developer</Typography>
                            <Button variant='outlined' onClick={openContactForm} className={classes.contactBtn}>Say Hi</Button>
                        </Box>
                    </Grid>
                    {!mediumScreen && <Grid item xs={12} md={12} lg={6}>
                        <Box display='flex' className={classes.cubeData} justifyContent='center'>
                            <Cube/>
                        </Box>
                    </Grid> }
                </Grid>
            </Box>
        </div>
    )
}

export default Home;
