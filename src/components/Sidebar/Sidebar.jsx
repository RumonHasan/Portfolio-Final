import React from 'react';
import { SidebarStyles } from './SidebarStyles';
// material ui
import { Typography, Box, Button, IconButton, Link } from '@material-ui/core';
// global context
import { useGlobalContext } from '../../context/context';
import { menu, snsIcons } from '../../services/data';
// react router hash link
import {NavHashLink} from 'react-router-hash-link';

const Sidebar = () => {
    const {mediumScreen} = useGlobalContext();
    const {useStyles} = SidebarStyles();
    const classes = useStyles();

    return (
            <div className={classes.root}>
                    <Box className={classes.sideLogoBox} alignItems='center' display='flex' justifyContent='center' flexDirection='column'>
                        <Typography variant='h1' className={classes.letter}>R</Typography>
                        <Typography variant='h6' className={classes.name}>Rumon</Typography>
                        <Typography className={classes.designation}>Web Developer</Typography>
                    </Box>
                    <Box className={classes.sideMenuBox} alignItems='center' display='flex' justifyContent='center' flexDirection='column'>
                        {menu.map((item, index)=>{
                            const {label} = item;
                            return (
                        <NavHashLink
                         smooth to={'#'+label} key={index} style={{textDecoration:'none'}}>
                            <Button className={classes.menuButton} variant='outlined'>
                                <Typography variant='h6' className={classes.menuText}>{label}</Typography>
                            </Button>
                        </NavHashLink>
                            )
                        })}
                    </Box>

                    <Box className={classes.snsBox} alignItems='center' display='flex' flexDirection='column'>
                        {snsIcons.map((item, index)=>{
                            const {icon, link} = item;
                            return(
                                <IconButton 
                                onClick={()=>window.open(link, '_blank')}
                                key={index} className={classes.icons}>
                                    {icon}
                                </IconButton>
                            )
                        })}
                    </Box>
            </div>
    )
}

export default Sidebar;
