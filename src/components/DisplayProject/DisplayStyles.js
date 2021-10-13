import { makeStyles } from '@material-ui/core';
import { colorToRgb } from 'tsparticles/Utils';
import { colors } from '../../services/theme/colors';
import { useGlobalContext } from '../../context/context';

export const DisplayStyles = ()=>{
    const {smallScreen} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        root:{
            background: colors.lightMattBlack,
            display: 'flex',
            flexDirection:'column',
        },
        header:{
            display:'flex',
            position: 'relative',
            justifyContent:'center',

        },
        closeIcon:{
            color: colors.mattBlack,
            transition: '450ms',
            padding:theme.spacing(1),
            position:'absolute',
            left: 0,
            margin: theme.spacing(2),
            background: colors.mainBlue,
            '&:hover':{
                background: colors.mainBlue,
            }
        },

        projectHeader:{
            fontFamily: "'Acme', sans-serif",
            color: colors.primaryWhite,
            fontWeight: 'bold',
            fontSize: 'clamp(1rem, 8vw, 3rem)',
        },
        // project content styles start 
        projectContent:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '100%',
        },
        // main info cards
        cardRoot:{
            padding: theme.spacing(1),
            marginBottom:theme.spacing(1),
            background:colors.mattBlack,
            maxWidth: '600px',
            width: '90%',
            maxHeight: '400px',
        },
        cardImage:{
            background:colors.mattBlack,
            maxWidth: '90%',
            maxHeight: smallScreen ? '500px' :'800px',
            '&::-webkit-scrollbar':{
                width: '10px'
            },
            '&::-webkit-scrollbar-track':{
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb':{
                background: colors.lightMattBlack,
            }
        },
        cardImageContainer:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },

        techBox:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            paddingBottom:theme.spacing(4),
            marginBottom:theme.spacing(2),
        },
        // lang card
        langCard:{
            background: colors.lightMattBlack,
            width: '100%',
            height: '100%',
        },
        langHeader:{
            fontWeight:'bold',
            padding:theme.spacing(0.5),
        },
        // piechart
        pieChart:{
            opacity: 0.7,
            cursor: 'pointer',
            '&:hover':{
                opacity: 1,
                transition: '450ms',
            },
            '& tspan':{
                fontSize: smallScreen ? '25px' :'30px',
                padding: theme.spacing(1),
                fontFamily: "'Acme', sans-serif",
            }
        },
        visitBtn:{
            border: `2px solid ${colors.mainBlue}`,
            color: colors.mainBlue,
            fontSize: theme.spacing(2),
            textDecoration:'none',
            padding: theme.spacing(1),
            cursor: 'pointer',
            '&:hover':{
                transition:'450ms',
                color: colors.mainBlack,
                background: colors.mainBlue,
            }
        }
    }))
    return {
        useStyles
    }
}