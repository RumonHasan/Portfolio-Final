import React,{useState, useEffect} from 'react';
// material ui
import { Dialog, Slide, IconButton, Typography,} from '@material-ui/core';
import { Close, ArrowBack } from '@material-ui/icons';
// style 
import { DisplayStyles } from './DisplayStyles';
// context
import { useGlobalContext } from '../../context/context';
// project content
import ProjectContent from './ProjectContent';
// transition component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

const DisplayProject = () => {
    const {showProject, closeProjectPresentation, projectDetails, smallScreen, setIsCardOpen} = useGlobalContext();
    const {useStyles} = DisplayStyles();
    const classes = useStyles();
    const returnFunctions = ()=>{
        closeProjectPresentation();
        setIsCardOpen(false);
    }
    return (
        <Dialog classes={{paper:classes.root}}
        fullScreen
        open={showProject}
        onClose={closeProjectPresentation}
        TransitionComponent={Transition}
        >
        <div className={classes.header}>
                <IconButton
                className={classes.closeIcon}
                onClick={returnFunctions}>
                    <ArrowBack style={{fontSize:smallScreen ? '20px':'35px'}}/>
                </IconButton>
                
            <Typography variant='h6' className={classes.projectHeader}>{projectDetails.name}</Typography>
       
        </div>

        <ProjectContent/>
            
        </Dialog>
    )
}

export default DisplayProject;
