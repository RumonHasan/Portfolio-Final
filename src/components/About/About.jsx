import React from 'react';
// style
import { AboutStyles } from './AboutStyles';
import { colors } from '../../services/theme/colors';
// material ui
import {Grid, Box, Typography} from '@material-ui/core';
// text
import { aboutTextOne, aboutTextTwo, aboutTextThree } from '../../services/data';
// context
import {useGlobalContext} from '../../context/context';
//image
import portfolio from '../../assets/profile.JPG';
import { motion } from 'framer-motion';

const About = () => {
    const {openContactForm} = useGlobalContext();
    const {useStyles} = AboutStyles();
    const classes = useStyles();
    return (
        <div className={classes.root} id='About'>
            <Box className={classes.aboutBox} display='flex' alignItems='center' justifyContent='center'>
                <Grid container alignItems = 'center'>
                    <Grid item xs={12} md={12} lg={6}>
                        <Box display='flex' flexDirection='column' className={classes.aboutTextbox}>
                            <Typography className={classes.aboutTitle}>Me, 自分 and আমি</Typography>
                            <Typography className={classes.aboutTextOne}>{aboutTextOne}</Typography>
                                <br/>
                            <Typography className={classes.aboutTextOne}>{aboutTextTwo}</Typography>
                                <br/>
                            <Typography className={classes.aboutTextOne}>{aboutTextThree}</Typography>
                            <p onClick={openContactForm} className={classes.contactLinkText}>
                                Let me know if you have something interesting to work on!
                            </p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                            <img src={portfolio} alt={portfolio}  className={classes.profileImg}/>
                    </Grid>
                </Grid>
            </Box>      
        </div>
    )
}

export default About;
