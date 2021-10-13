import React, {useState} from 'react';
// data
import { menu, snsIcons } from '../../services/data';
// context
import { useGlobalContext } from '../../context/context';
// material ui
import {  List,Typography, ListItem, ListItemText, Button, Drawer, Box  } from '@material-ui/core';
import {Menu, Close } from '@material-ui/icons'
// style
import { HeaderStyle } from './HeaderStyles';
import { fontSize } from '../../services/fontSize';
// hashlink
import {HashLink} from 'react-router-hash-link';

const Header = () => {
    const {mediumScreen, openDrawer, drawer, closeDrawer} = useGlobalContext();
    const {useStyle} = HeaderStyle();
    const classes = useStyle();

    return (
        <>
            {mediumScreen && <div className={classes.root}>
                <Button onClick={openDrawer} className={classes.menuButton} variant='contained'>
                    <Menu className={classes.icon}/>
                </Button>
                <Drawer classes={{paper:classes.drawerPaper}} width={'100%'} anchor='right' open={drawer} onClose={closeDrawer}>
                    <div className={classes.menuHeader}>
                        <Button variant='text' className={classes.closeBtn} onClick={closeDrawer}><Close className={classes.closeIcon}/></Button>
                        <Box className={classes.sideLogoBox} alignItems='center' display='flex' justifyContent='center' flexDirection='column'>
                            <Typography variant='h1' className={classes.letter}>R</Typography>
                            <Typography variant='h6' className={classes.name}>Rumon</Typography>
                            <Typography className={classes.designation}>Web Developer</Typography>
                        </Box>
                    </div>
                    <List className={classes.menuList}>
                        {menu.map((item,index)=>{
                            const {label} = item;
                            return(
                            <HashLink smooth to={'#'+label} style={{textDecoration:'none', width:'100%'}} key={index}>
                                <ListItem onClick={closeDrawer} className={classes.menuItems} button>
                                    <ListItemText style={{textAlign:'center'}} primary={label}/>
                                </ListItem>
                            </HashLink>
                            )
                        })}
                    </List>

                    <Box className={classes.snsBox} alignItems='center' display='flex' justifyContent='center'>
                        {snsIcons.map((item,index)=>{
                            const {icon} = item;
                            return(
                                <Button key={index} variant='text' className={classes.snsIconBtn}>{icon}</Button>
                            )
                        })}
                    </Box>
                </Drawer>
            </div> }
        </>
    )
}

export default Header;
