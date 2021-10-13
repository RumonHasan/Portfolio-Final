import React, {useRef, useEffect, useState} from 'react';
import { useGlobalContext } from '../../context/context';
import { SkillStyles } from './SkillStyles';
import { motion } from 'framer-motion';
import { colors } from '../../services/theme/colors';
// materials
import { Typography, Grid, Box } from '@material-ui/core';
// skills
import {skills} from '../../services/skillSet';
// sphere
import Sphere from '../About/Sphere';

const Skills = () => {
    const {useStyles} = SkillStyles();
    const classes = useStyles();
    const rootRef = useRef(null);
    const waterMarkRef = useRef(null);
    // scroll listener
    const [triggerAnimation, setTriggerAnimation] = useState(false); // for water mark
    useEffect(()=>{
        const currentRef = waterMarkRef.current;
        function listenToScroll(){ // fires as long as the scroll pos changes / not optimized
            const positionParams = currentRef.getBoundingClientRect();
            // const windowScrollY = window.scrollY; // window scroll length not required
            const yPos = positionParams.y;
            const checkAnimTrigger = yPos <= 400;
            setTriggerAnimation(checkAnimTrigger);
        }
        if(currentRef){ 
            window.addEventListener('scroll', listenToScroll)
        }
        return (()=>{
            window.removeEventListener('scroll', listenToScroll)
        })
    },[waterMarkRef]);

    // increase skill level
    const [skillSet, setSkills] = useState(skills);
    

    const SkillBar = (props)=>{
        const {level, color, name} = props;
        const [newStyle, setNewStyle] = useState({}); // object style
        const [initialLevel, setInitialLevel] = useState(0);
        useEffect(()=>{
            if(triggerAnimation){
                const skillLoader = setTimeout(()=>{
                   setInitialLevel((initial)=>
                   initial === level ? level : initial + 2);
                   const style={
                    width: `${initialLevel}%`,
                    opacity: 1,
                    background: color
                }
                setNewStyle(style);
                }, 30)
                return (()=>{
                    clearTimeout(skillLoader)
                })
            }
        },[initialLevel, color, level]);


        return (
            <motion.div className={classes.skillLevel} style={newStyle}>
                <Typography style={{textAlign:'center', paddingLeft:'10px', whiteSpace:'nowrap', color:colors.mainBlack, fontWeight:'bold'}}>{name}</Typography>
                <Typography style={{fontWeight:'bold', paddingRight:'10px'}}>{initialLevel}%</Typography>
            </motion.div>
        )
    }

    return (
        <div className={classes.root} ref={rootRef} id='Skills'>
            <motion.div
                    initial={{
                            opacity: 0,
                            }}
                    animate={{ opacity: triggerAnimation ? 1: 0, translateY: 0 }}
                    transition={{ duration: 1, delay: 0.2 }} className={classes.skillMarkContainer} ref={waterMarkRef}>
                <Typography variant='h1' className={classes.skillMark}>Skills</Typography>
            </motion.div>
        
        <Grid container alignItems='center'>
            <Grid item xs={12} lg={6} md={6}>
                <motion.div  
                initial={{translateX: -1000}}
                animate={{translateX: triggerAnimation ? 0: -1000}}
                transition={{duration: 2, delay:0.5}}
                style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Sphere/>
                </motion.div>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
                <motion.div className={classes.skillContainer}>
                    {skillSet.map((skill, index)=>{
                        const {name, level, color} = skill;
                        return (
                            <motion.div className={classes.skillBox} key={index} style={{height: '8%'}}>
                                <SkillBar level={level} color={color} name={name}/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </Grid>
        </Grid>
        </div>
    )
}


export default Skills;
