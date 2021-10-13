export const initialState = { // states
    drawer: false,
    showContact: false,
    showProject: false,
    projectDetails: {},
}

export const reducer = (state, action)=>{ // reducer actions
    switch(action.type){
        // drawer states
        case 'OPEN_DRAWER':
            return{
                ...state,
                drawer: true
            }
        case 'CLOSE_DRAWER':
            return{
                ...state,
                drawer: false
            }
        // show contact
        case 'OPEN_CONTACT':
            return{
                ...state,
                showContact: true,
            }
        case 'CLOSE_CONTACT':
            return{
                ...state,
                showContact: false,
            }
        // project presentation
        case 'OPEN_PROJECT':
            return {
                ...state,
                projectDetails: action.payload,
                showProject: true,
            }
        case 'CLOSE_PROJECT':
            return {
                ...state,
                showProject: false
            }
        default: 
        return {
            ...state,
        }
    }
}
