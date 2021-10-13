import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import { ProjectStyles } from './ProjectStyle';
// context
import { useGlobalContext } from '../../context/context';

const ProjectButton = ({projectContent}) => {
    const {openProjectPresentation, setIsCardOpen} = useGlobalContext();
    const {useStyles} = ProjectStyles();
    const classes = useStyles();
    const [showButton, setShowButton] = useState(false);
    const projectShow = ()=>{       
        openProjectPresentation(projectContent);
        setIsCardOpen(true);
    }
    return (
        <div className={classes.projectButtonContainer}
        onMouseEnter={()=>setShowButton(true)}
        onMouseLeave={()=>setShowButton(false)}> 
            <Button onClick={projectShow} className={showButton ? classes.projectOpenBtnShow : classes.projectOpenBtn} variant='contained'>View<br/>Project</Button>
        </div>
    )
}

export default ProjectButton;
