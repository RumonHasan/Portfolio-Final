import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
// styles
import { ContactStyles } from './ContactStyles';
import { Grid, Typography, Button } from '@material-ui/core';
// cube
import ContactSphere from './ContactSphere';
import { useGlobalContext } from '../../context/context';
import clsx from 'clsx';
import emailjs from 'emailjs-com';

const Contact = ()=>{
    const {useStyles} = ContactStyles();
    const classes = useStyles();
    const { setNotify} = useGlobalContext();
     // form inputs
     const [formInputs, setFormInputs] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    // handleInputForm
    const handleFormInputs = (e)=>{
        const {name,value} = e.target;
        setFormInputs({
            ...formInputs,
            [name]:value
        })
    }
    // animation
    const [triggerAnimation, seTriggerAnimation] = useState(false);
    const inputRef = React.useRef(null);
    React.useEffect(()=>{
        function checkScroll (){
            const elementPosY = inputRef.current.getBoundingClientRect().y;
            const checkPos = elementPosY <= 700
            seTriggerAnimation(checkPos);
        }
        if(inputRef){
            window.addEventListener('scroll', checkScroll);
        }
        return (()=>{
            window.removeEventListener('scroll', checkScroll);
        })
    },[triggerAnimation]);
    console.log(triggerAnimation);

    const headerElements ={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay: 0.3,
                staggerChildren: 0.25,
            }
        }
    }

    const inputs ={
        hidden:{
            opacity:0,
            x: -200
        },
        visible:{
            opacity: 1,
            x:0,
        },
        transition: {
            ease: 'easeOut',
        }
    }

    // validation function
    // submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!formInputs.name && !formInputs.email && !formInputs.subject && !formInputs.message){
            setNotify({
                isOpen: true,
                type:'error',
                message:'No field has been entered!',
            })
        }
        else if(!formInputs.name){
            setNotify({
                isOpen: true,
                type:'error',
                message:'Name is required',
            })
        }
        else if(!formInputs.email){
            setNotify({
                isOpen: true,
                type:'error',
                message:'Email is required',
            })
        }
        else if(!(/$^|.+@.+..+/).test(formInputs.email)){
            setNotify({
                isOpen: true,
                type:'error',
                message:'Email is invalid',
            })
        }
        else if(!formInputs.subject){
            setNotify({
                isOpen: true,
                type:'error',
                message:'Subject is required',
            })
        }
        else if(!formInputs.message){
            setNotify({
                isOpen: true,
                type:'error',
                message:'Message is required',
            })
        }else{
            setNotify({
                isOpen: true,
                type:'Success',
                message:'Message has been sent!',
            })
            // using email js as a client server
            emailjs.sendForm('service_9nur50f', 'template_p8t22o3', e.target, 'user_zNydY3ilUr2W6j2mYe48r')
            resetForm();
        }

    }
    const resetForm = ()=>{
        setFormInputs({
            ...formInputs,
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    return (
        <motion.div className={classes.root} id='Contact'>
            <motion.div className={classes.container}>
                <Grid container alignItems='center'>
                    <Grid item xs={12} md={6} lg={6}>
                        <motion.div style={{width:'100%'}} className={classes.formContainer}>
                            <Typography className={classes.contactTitle}>
                                Contact Me!
                            </Typography>
                            <Typography className={classes.contactText}>
                                I am quite interested in freelance opportunities for both small and large projects in building websites and web applications.
                                However if you have any other requests or queries, feel free to contact me!
                            </Typography>
                            <form className={classes.formRoot} onSubmit={handleSubmit}>
                                    <motion.div initial='hidden' animate={triggerAnimation ? 'visible': 'hidden'} variants={headerElements} ref={inputRef} className={classes.formElements}>      
                                        <motion.input variants={inputs}  type='text' name='name' className={clsx(classes.inputField, classes.inputSpaces)} placeholder='Name' value={formInputs.name} onChange={handleFormInputs}/>
                                        <motion.input  variants={inputs} type='text' name='email' className={clsx(classes.inputField, classes.inputSpaces)} placeholder='Email' value={formInputs.email} onChange={handleFormInputs}/>
                                        <motion.input variants={inputs} type='text' name='subject' className={clsx(classes.inputField, classes.inputSpaces)} placeholder='Subject' value={formInputs.subject} onChange={handleFormInputs}/>
                                        <motion.textarea variants={inputs} type='text' name='message' style={{minHeight:120}} className={clsx(classes.inputField, classes.inputSpaces)} placeholder='Message' value={formInputs.message} onChange={handleFormInputs}/>
                                    </motion.div>
                                    <div className={classes.formButtons}>
                                        <Button variant='contained' className={classes.submitBtn} style={{cursor:'none'}} type='submit'>Send Message!</Button>
                                        <Button variant='contained' className={classes.resetBtn}  style={{cursor:'none'}} onClick={resetForm}>Reset</Button>
                                    </div>
                            </form>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <motion.div style={{width:'100%'}}>
                            <ContactSphere/>
                        </motion.div>
                    </Grid>
                </Grid>
            </motion.div>
        </motion.div>
    )
}

export default Contact;