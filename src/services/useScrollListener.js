import {useState,useEffect} from 'react';

export const useScrollListener = (elementRef, addY)=>{
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    useEffect(()=>{
        const currentRef = elementRef.current;
        function listenToScroll(){ // fires as long as the scroll pos changes / not optimized
            const positionParams = currentRef.getBoundingClientRect();
            const windowScrollY = window.scrollY;
            const yPos = positionParams.y;
            const checkAnimTrigger = yPos < windowScrollY + addY;
            setTriggerAnimation(checkAnimTrigger);
        }
        if(currentRef){ 
            window.addEventListener('scroll', listenToScroll)
        }
        return (()=>{
            window.removeEventListener('scroll', listenToScroll)
        })
    },[elementRef])
    return {
        triggerAnimation
    }
}
