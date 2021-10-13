import React, {useState, createContext, useReducer, useContext} from "react";
import { initialState, reducer } from "./reducer"; // reducer and states
import { useMediaQuery } from "@material-ui/core";
export const GlobalContext = createContext();

export const GlobalProvider = ({children})=>{

    //state reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // responsive elements 
    const mediumScreen = useMediaQuery('(max-width:900px)'); 
    const smallScreen = useMediaQuery('(max-width: 680px)');

    // notification
    const [notify, setNotify] = useState({
        isOpen: false,
        type: '',
        message: '',
    })
    // loading
    const [isLoading, setIsLoading] = useState(false);
    // project card animation control
    const [isCardOpen, setIsCardOpen] = useState(false);


    // functions 
    const openDrawer = ()=>{
        dispatch({type:'OPEN_DRAWER'});
    }
    const closeDrawer = ()=>{
        dispatch({type:'CLOSE_DRAWER'});
    }
    // contact form 
    const openContactForm = ()=>{
        dispatch({type:'OPEN_CONTACT'})
    }
    const closeContactForm = ()=>{
        dispatch({type:'CLOSE_CONTACT'});
    }
    // project pop up
    const openProjectPresentation = (projectContent)=>{
        dispatch({type:'OPEN_PROJECT', payload: projectContent});
    }
    const closeProjectPresentation = ()=>{
        dispatch({type:'CLOSE_PROJECT'});
    }

    return(
        <GlobalContext.Provider value={{
            ...state,
            mediumScreen,
            smallScreen,
            // notification
            notify, setNotify,

            // loading
            isLoading, setIsLoading,
            // lang card
            isCardOpen, setIsCardOpen,

            // drawer function
            openDrawer,
            closeDrawer,

            // contact form
            openContactForm,
            closeContactForm,

            // project presentation
            openProjectPresentation,
            closeProjectPresentation,
        }}>
        {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}