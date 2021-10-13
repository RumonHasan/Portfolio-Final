import React,{useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core';
import { motion } from 'framer-motion';
import {colors} from './services/theme/colors';

const useStyles = makeStyles(theme=>({
    root:{
        zIndex: 10000,
        pointerEvents: 'none',
        borderRadius: '50%',
        background: colors.mainBlue,
        overflow: 'hidden',
        transform: 'translate(0, 0, 0)',
        position:'fixed',
        width: '40px',
        height: '40px',
        opacity: 0.3,
        cursor: 'none',
    }
}))

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const classes = useStyles();

    // cursor controls
    useEffect(()=>{
        document.addEventListener('mousemove', (event)=>{
            const {clientX, clientY} = event; // mouse cursor location
            const mouseX = clientX;
            const mouseY = clientY;

            cursorRef.current.style.transform = `translate3d(${mouseX-
            cursorRef.current.clientWidth / 2}px,${mouseY-
                cursorRef.current.clientHeight / 2}px, 0)`
        })
    },[])
    return (
        <motion.div ref={cursorRef} className={classes.root}>
            
        </motion.div>
    )
}

export default CustomCursor;
