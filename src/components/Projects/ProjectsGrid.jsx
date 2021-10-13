import React, {useState} from 'react';
import TypewriterComponent from 'typewriter-effect';
// style
import { ProjectStyles } from './ProjectStyle';
// material ui
import {Grid, Button, FormControl, paper, InputLabel, Select, MenuItem, Typography, Paper} from '@material-ui/core';
// project
import Project from './Project';
// project images & data
import { projectImages } from '../../services/data';
import { projectDescription } from '../../services/data';
// context
import { useGlobalContext } from '../../context/context';
import { colors } from '../../services/theme/colors';

const ProjectsGrid = () => {
    const {useStyles} = ProjectStyles();
    const classes = useStyles();
    const {smallScreen} = useGlobalContext();
    const [projects, setProjects] = useState(projectImages);
    // filtering project states and functions
    const categoryList = ['All', ...new Set(projectImages.map((project)=>project.category))];
    const filterProjects = (category)=>{
        if(category){
            if(category === 'All'){ // all projects
                setProjects(projectImages);
                return;
            }
            const filteredProjects = projectImages.filter((project)=>project.category === category);// filtering from project images
            setProjects(filteredProjects);
        }else return;
    }
    // select states
    const [selectCat, setSelectCat] = useState('');
    const handleSelect = (e)=>{
        setSelectCat(e.target.value);
    }
    return (
        <div className={classes.root} id='Work'>
            <div className={classes.projectBriefContainer}>
                <Typography className={classes.projectHeader} variant='h1'>
                    <TypewriterComponent
                        onInit={(typeText)=>{
                         typeText.typeString('My Portfolio')
                         .start()   
                        }}
                    />
                </Typography>
                <div style={{width:smallScreen ? '95%': '60%'}}>
                    <Typography className={classes.projectDescription}>
                            {projectDescription}
                    </Typography>
                </div>
            </div>

            <div className={classes.filterBtnContainer}>
                {smallScreen ?
                <FormControl className={classes.selectForm}>
                    <InputLabel style={{color: colors.mainBlue, padding: 4}} id="simple-select-label">Category</InputLabel>
                    <Select
                    labelId='simple-select-label'
                    id="simple-select"
                    value={selectCat}
                    onChange={handleSelect}
                    className={classes.select}
                    MenuProps={{classes:{paper: classes.dropdownmenu}}}
                    >
                        {categoryList.map((category, index)=>{
                            return (
                                <MenuItem className={classes.selectItem} key={index} onClick={()=>filterProjects(category)} value={category}>{category}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                :categoryList.map((category, index)=>{
                    return (
                        <Button key={index} onClick={()=>filterProjects(category)} variant='outlined' className={classes.filterBtn}>{category}</Button>
                    )
                })}
            </div>
           
                <Grid container alignItems='center' className={classes.projectGrid}>
                    <Project setProjects={setProjects} projects={projects}/>
                </Grid>
        </div>
    )
}

export default ProjectsGrid;
