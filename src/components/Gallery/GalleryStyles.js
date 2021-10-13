import { makeStyles } from '@material-ui/core';
import React from 'react';
import { colors } from '../../services/theme/colors';

export const GalleryStyles = ()=>{
    const useStyles = makeStyles(theme=>({
        root:{
            background: colors.secondDark,
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(20),
            positive: 'relative',
            flexDirection:'column',

        },
        // header:
        skillMarkContainer:{
            position:'absolute',
        },
        skillMark:{
            fontFamily: "'Luckiest Guy', cursive",
            fontWeight: 1000,
            paddingTop:theme.spacing(7),
            [theme.breakpoints.down('600')]:{
                fontSize: '100px',
            },
            [theme.breakpoints.up('600')]:{
              fontSize: '170px'  
            },
            [theme.breakpoints.up('800')]:{
                fontSize: '200px'  
              },
            [theme.breakpoints.up('1200')]:{
            fontSize: '250px'  
            },
            [theme.breakpoints.up('1400')]:{
                fontSize: '280px'  
            },
            textTransform: 'uppercase',
            color: colors.primaryWhite,
            opacity: 0.08,
            transition: '450ms',
        },
        // image filter buttons
        imageFilterButtons:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        filterBtn:{
            border: `2px solid ${colors.secondBlue}`,
            color: colors.secondBlue,
            padding: theme.spacing(1),
            margin: theme.spacing(1),
            cursor:'none',
            '&:hover':{
                transition: '450ms',
                background: colors.mainBlue,
                transform: 'scale(1.05)',
                color: colors.mainBlack,
            }
        },
        // gallery
        galleryHeader:{
            paddingTop:theme.spacing(10),
            paddingLeft:theme.spacing(5),
            display:'flex',
            flexDirection:'column',
        },
        gallerySection:{
            marginTop: theme.spacing(10)
        },

        gallery:{
            display: 'flex',
            justifyContent:'flex-start',
            alignItems:'center',
            zIndex: 99
        },
        galleryGridContainer:{
            width: '90%',
            maxHeight: '600px',
            '&::-webkit-scrollbar':{
                width: '10px'
            },
            '&::-webkit-scrollbar-track':{
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                background: 'rgba(0, 0, 0, 0.2)',
            },
            '&::-webkit-scrollbar-thumb':{
                background: colors.lightMattBlack,
            },
            overflowY: 'auto',
        },
        // title
        galleryTitle:{
            fontWeight:'bold',
            fontFamily: "'Acme', sans-serif",
            color:colors.secondBlue,
            fontSize: 'clamp(2rem, 10vw, 6rem)',
        },
        galleryText:{
            fontFamily: "'Noto Sans', sans-serif",
            color:colors.primaryWhite,
            fontSize: 'clamp(0.5rem, 3vw, 1.5rem)',
            paddingTop:theme.spacing(3),
        },
        galleryIcon:{
            animation: '$spin 4s linear infinite',
        },
        "@keyframes spin":{ // letter animations
            "0%":{ transform: 'rotateY(0deg)',
            transition: '850ms ease-in-out',
            color: colors.mainBlue,
            },
            "100%":{ transform: 'rotateY(360deg)',
            transition: '850ms ease-in-out',
            color: colors.mainBlue
    
            }
        },
        // image grid
        imageGridItem:{
            height:'200px',
            opacity:'0.5',
            width: '100%',
            cursor:'none',
            '&:hover':{
                opacity:1,
                transition: '.3s ease-in-out',
            }
        },
        dialog:{
            background: colors.mattBlack,
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            zIndex: 100,
            maxWidth: '1000px',
        }
    }))

    return {
        useStyles,
    }
}