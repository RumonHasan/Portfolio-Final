import React, {useState} from 'react';
//context
import { useGlobalContext } from '../../context/context'; 
// material ui 
import { Dialog, DialogContent, DialogTitle, Typography, Button} from '@material-ui/core';
// styles
import { FormStyles } from './ContactStyles';
import { colors } from '../../services/theme/colors';
//icon
import {Close} from '@material-ui/icons';
//data
import { titleText } from '../../services/data';
import clsx from 'clsx';
// email js
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const {showContact, closeContactForm, smallScreen, setNotify} = useGlobalContext();
    const {useStyles} = FormStyles();
    const classes = useStyles();
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
            closeContactForm();
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
        <Dialog onClose={closeContactForm} maxWidth='md' classes={{paper: classes.dialogWrapper}} open={showContact}>
            <DialogTitle>
                <div className={classes.titleBox}>
                    <Typography className={classes.title}>Contact Me!</Typography>
                    <Button variant='contained' onClick={closeContactForm} className={classes.closeBtn}><Close style={{fontSize:'40px', fontWeight:'bold', color:colors.mainBlue}}/></Button>
                    <Typography className={classes.titleText} style={{width: smallScreen ? '100%': '70%'}}>
                        {titleText}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent dividers>
            <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
                <form className={classes.formRoot} onSubmit={handleSubmit}>
                    <div className={classes.formElements}>
                        <div className={classes.formHeaderInputs}>
                            <input type='text' name='name' className={clsx(classes.inputField, classes.inputSpaces)} placeholder='Enter name' value={formInputs.name} onChange={handleFormInputs}/>
                            <input type='text' name='email' className={clsx(classes.inputField, classes.inputSpaces)} placeholder='Enter email' value={formInputs.email} onChange={handleFormInputs}/>
                        </div>
                        <input type='text' name='subject' className={clsx(classes.inputField, classes.inputSpaces)} placeholder='Enter subject' value={formInputs.subject} onChange={handleFormInputs}/>
                        <textarea type='text' name='message' style={{minHeight:120}} className={clsx(classes.inputField, classes.inputSpaces)} placeholder='message' value={formInputs.message} onChange={handleFormInputs}/>
                    </div>
                    <div className={classes.formButtons}>
                        <div>
                            <Button variant='contained' className={classes.submitBtn} type='submit'>Send Message!</Button>
                            <Button variant='contained' className={classes.resetBtn} onClick={resetForm}>Reset</Button>
                        </div>
                    </div>
                </form>
            </div>
            </DialogContent>
        </Dialog>
    )
}

export default ContactForm;
