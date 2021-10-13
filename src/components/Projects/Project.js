import React, {useState, useRef} from 'react'
import { ProjectStyles } from './ProjectStyle';
// material ui
import {Grid} from '@material-ui/core';
// button
import ProjectButton from './ProjectButton';
// framer
import { motion } from 'framer-motion';
// scroll listener
import {useScrollListener} from '../../services/useScrollListener';
// context
import { useGlobalContext } from '../../context/context';

const Project = ({projects, setProjects}) => {
    const {mediumScreen, smallScreen} = useGlobalContext();
    const {useStyles} = ProjectStyles();
    const classes = useStyles();
    // scroll animation
    const gridItemRef = useRef(null);
    const {triggerAnimation} = useScrollListener(gridItemRef, 200);
    return (
        <>
        {projects.map((project, index)=>{
            return(
            
                <Grid item key={index}  xs={6}
                    md={4} lg={3} 
                    >
                    <motion.div
                    ref={gridItemRef}
                           initial={{
                            opacity: 0,
                            }}
                    animate={{ opacity: triggerAnimation ? 1: 0, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }} className={classes.projectItem} style={{backgroundImage: `url(${project.image})`, width:'100%'}}>
                        <ProjectButton projectContent={project}/>
                    </motion.div>
                </Grid>
            
            )
        })}
        </>
    )
}

export default Project;
