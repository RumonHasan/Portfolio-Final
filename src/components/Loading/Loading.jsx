import React from 'react';
import {motion} from 'framer-motion';
import { LoadStyles } from './LoadStyles';
import CubeLoad from './CubeLoad';
import home from '../../assets/loadBg.jpg'

const Loading = () => {
    const {useStyles} = LoadStyles();
    const classes = useStyles();
    return (
        <motion.div className={classes.root} style={{background:`url(${home})`, backgroundSize:'cover'}}>
            <CubeLoad/>
        </motion.div>
    )
}

export default Loading;
