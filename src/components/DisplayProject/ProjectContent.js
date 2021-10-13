import React, {useEffect, useState} from 'react';
import { Link, Card, Grid, CardHeader, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core';
import { useGlobalContext } from '../../context/context';
import { DisplayStyles } from './DisplayStyles';
import {colors} from '../../services/theme/colors';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Tooltip } from 'recharts';
const ProjectContent = () => {
    const { isLoading, setIsLoading, projectDetails, smallScreen} = useGlobalContext();
    const {useStyles} = DisplayStyles();
    const classes = useStyles();
 
    useEffect(()=>{
        const timeOut = setInterval(()=>{
          setIsLoading(false);
        },2000)
        return (()=>{
            clearInterval(timeOut);
        })
    },[setIsLoading])

    // pie data state 
    const [pieData, setPieData] = useState(
        projectDetails.languages.map((project)=>{
            return {name: project.label, value:project.value, fill:project.color}
        })
    )

    return (
            <div className={classes.projectContent}>
                <Grid container alignItems='center'>

                    {/* First grid container  */}
                    <Grid item xs={12} md={6} lg={6} style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                        <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 1.5, delay:1 }} 
                        className={classes.cardImageContainer}>
                            <Card className={classes.cardImage} elevation={5} style={{overflowY: 'auto', marginBottom:'8px'}}>
                                <CardMedia
                                    component='img'
                                    image={projectDetails.fullScreen}
                                    height={'100%'}
                                />
                            </Card>                  
                         </motion.div>
                    </Grid>

                    {/* Second grid container  */}
                    <Grid item xs={12} md={6} lg={6} style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}> 
                        {/* First card container */}
                        <Card className={classes.cardRoot} elevation={5}>
                            <CardHeader
                                title= 'Technology Stack:'
                                style={{color:colors.primaryWhite, opacity:0.7, fontWeight: 'bold', fontFamily: "'Acme', sans-serif"}}
                            />
                            <CardContent>
                            
                                <div style={{display:'flex', width:'100%'}}>
                                    <AnimatePresence>
                                        <motion.div initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                exit={{ height: 0 }}
                                                transition={{ duration: 1.5, delay:1 }}  style={{width: '100%',margin: '8px'}}>
                                            <Card className={classes.langCard} elevation={5}>
                                                <CardHeader
                                                    title='Languages:'
                                                    style={{color:colors.primaryWhite, opacity:0.7}}
                                                />
                                                <CardContent>
                                                    {projectDetails.languages?.map((project, index)=>{
                                                        const {label, icon, color} = project;
                                                        return (
                                                            <div style={{display:'flex', justifyContent:'space-between'}} key={index}>
                                                                <Typography  style={{color:color}} className={classes.langHeader}>
                                                                    {label}
                                                                </Typography>
                                                                <Typography style={{color:color, fontSize:'25px'}} className={classes.langIcon}>
                                                                    {icon}
                                                                </Typography>
                                                            </div>
                                                        )
                                                    })}
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </AnimatePresence>

                                <motion.div 
                                initial={{height:0}}
                                animate={{height: "auto"}}
                                exit={{height: 0}}
                                transition={{ duration: 1.5, delay: 1 }}
                                style={{width:'100%',height:'100%',margin: '8px',}}>
                                    <Card className={classes.langCard} elevation={5}>
                                        <CardHeader
                                            title='Libraries:'
                                            style={{color:colors.primaryWhite, opacity:0.7}}
                                        />
                                        <CardContent>
                                            {projectDetails.frameworks?.map((project, index)=>{
                                                const {name, icon, color} = project;
                                                return (
                                                    <div style={{display:'flex', justifyContent:'space-between'}} key={index}>
                                                        <Typography  style={{color:color}} className={classes.langHeader}>
                                                            {name}
                                                        </Typography>
                                                        <Typography style={{color:color, fontSize:'25px'}} className={classes.langIcon}>
                                                            {icon}
                                                        </Typography>
                                                    </div>
                                                )
                                            })}
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                </div>
                            </CardContent>
                                <CardActions style={{display:'flex', justifyContent:'center'}}>
                                    <Button onClick={()=>window.open(projectDetails.link, '_blank')} className={classes.visitBtn}>Visit Page!</Button>
                                </CardActions>
                        </Card>

                        {/* second card container */}                      
                        <Card className={classes.cardRoot} elevation={5}>
                            <CardHeader
                                title='Distribution %:'
                                style={{color:colors.primaryWhite, opacity:0.7, fontWeight: 'bold', fontFamily: "'Acme', sans-serif"}}
                            />
                            <CardContent>
                                <motion.div className={classes.techBox}>
                                    <PieChart width={450} height={350}>
                                        <Pie
                                        className={classes.pieChart}
                                        data={pieData}
                                        isAnimationActive={true}
                                        dataKey='value'
                                        outerRadius={smallScreen ? 120 : 110}
                                        label
                                        cx="50%" 
                                        cy="50%"
                                        />
                                        <Tooltip/>
                                    </PieChart>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </div>
    )
}

export default ProjectContent;
