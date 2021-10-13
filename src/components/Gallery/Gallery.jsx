import React, {useState, useEffect, useRef} from 'react';
import { GalleryStyles } from './GalleryStyles';
import { motion } from 'framer-motion';
import { Dialog, Typography, Grid, Button, Slide, IconButton } from '@material-ui/core';
import {FaCamera} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md'
import { colors } from '../../services/theme/colors';
// images
import { galleryImages } from '../../services/galleryImages';
import { useGlobalContext } from '../../context/context';

const Gallery = () => {
    const {smallScreen} = useGlobalContext();
    const {useStyles} = GalleryStyles();
    const classes = useStyles();
    // main image state
    const [images, setImages] = useState(galleryImages);
    // preview states
    const [imgSrc, setImgSrc] = useState('');
    const [imgModal, setImgModal] = useState(false);

    const showImage = (imgSrc)=>{ // show image 
        setImgSrc(imgSrc);
        setImgModal(true);
    }

    // animation trigger
    const waterMarkRef = useRef(null);
    const galleryRef = useRef(null);
    const [triggerAnimation, setTriggerAnimation] = useState(false); // for water mark
    useEffect(()=>{
        const currentRef = galleryRef.current;
        function listenToScroll(){ // fires as long as the scroll pos changes / not optimized
            const positionParams = currentRef.getBoundingClientRect();
            // const windowScrollY = window.scrollY; // window scroll length not required
            const yPos = positionParams.y;
            const checkAnimTrigger = yPos <= 800;
            setTriggerAnimation(checkAnimTrigger);
        }
        if(currentRef){ 
            window.addEventListener('scroll', listenToScroll)
        }
        return (()=>{
            window.removeEventListener('scroll', listenToScroll)
        })
    },[galleryRef]);
    // watermark animation trigger
    const [triggerWatermark, setTriggerWatermark] = useState(false);
    useEffect(()=>{
        const currentRef = waterMarkRef.current;
        function listenToScroll(){ // fires as long as the scroll pos changes / not optimized
            const positionParams =currentRef.getBoundingClientRect();
            // const windowScrollY = window.scrollY; // window scroll length not required
            const yPos = positionParams.y;
            const checkAnimTrigger = yPos <= 500;
            setTriggerWatermark(checkAnimTrigger);
        }
        if(currentRef){ 
            window.addEventListener('scroll', listenToScroll)
        }
        return (()=>{
            window.removeEventListener('scroll', listenToScroll)
        })
    },[waterMarkRef]);

    // close image preview
    const closeImgPreview = ()=>{
        setImgModal(false);
        setImgSrc('');
    }

    // image filtering 
    const categories = ['All', ...new Set(galleryImages.map(image=> image.category))];
    const filterImage = (category)=>{
        if(category){
            if(category === 'All'){
                setImages(galleryImages);
                return;
            }
            const filteredCategory = galleryImages.filter(image=> image.category === category);
            setImages(filteredCategory);
        }
    }
    return (
            <motion.div className={classes.root} id='Gallery'>

            <motion.div
                    initial={{
                            opacity: 0,
                            }}
                    animate={{ opacity: triggerWatermark ? 1: 0, translateY: 0 }}
                    transition={{ duration: 1, delay: 0.2 }} className={classes.skillMarkContainer} ref={waterMarkRef}>
                <Typography variant='h1' className={classes.skillMark}>Photos</Typography>
            </motion.div>        

                <motion.div className={classes.imageFilterButtons}>
                    {categories.map((category, index)=>{
                        return (
                            <Button key={index} className={classes.filterBtn} onClick={()=>filterImage(category)}>{category}</Button>
                        )
                    })}
                </motion.div>

                <motion.div className={classes.galleryHeader}>
                    
                    <motion.div style={{display:'flex'}}>
                        <Typography className={classes.galleryTitle} variant='h1'>
                            My Gallery 
                        </Typography>
                        <Typography className={classes.galleryTitle} style={{paddingTop: '6px', paddingLeft:'10px'}} variant='h1'>
                            <MdPhoneIphone className={classes.galleryIcon}/>
                        </Typography>
                    </motion.div>
                  
                    <motion.div style={{width:smallScreen ? '95%': '60%'}}>
                        <Typography className={classes.galleryText}>
                               Apart from coding, I enjoy taking various portraits and landscape shots of people and sceneries
                               across Japan. All the pictures are usually shot using my smartphone and edits are usually done through 
                               applications such as Lightroom, Snapseed etc. Below you can view a small gallery of some of the pictures I have taken so far.
                        </Typography>
                    </motion.div>
                </motion.div>


                <motion.div ref={galleryRef}
                initial={{translateX: -1600}}
                animate={{translateX: triggerAnimation ? 0: -1600}}
                transition={{duration: 1, delay: 0.01}}
                className={classes.gallerySection} style={{width: '100%', display: 'flex'}}>
                    <motion.div style={{width: '100%'}} className={classes.gallery}>
                        {/* <Button className={classes.galleryBtn}><FaCamera/></Button> */}
                            <Grid container alignItems = 'center' className={classes.galleryGridContainer}>
                                {images.map((image)=>{
                                    const {id, imgSrc} = image;
                                    return (
                                        <Grid item key={id} xs={4} md={3} onClick={()=>showImage(imgSrc)} lg={2} className={classes.imageGridItem} style={{background:`url(${imgSrc})`, backgroundSize:'cover', backgroundPosition:'center'}}>

                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </motion.div>
                    </motion.div>
                
                {imgModal && 
                <Dialog 
                classes={{paper:classes.dialog}}
                open={imgModal}
                onClose={closeImgPreview}>
                        <img src={imgSrc} alt={imgSrc} width='70%'/>
                </Dialog>
                }
            
                  
            </motion.div>


    )
}

export default Gallery;


