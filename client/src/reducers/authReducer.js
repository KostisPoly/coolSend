import { FETCH_USER } from '../actions/types'

export default function auth(state = null, action) {//Default null to indicate no response yet (not empty res/obj)
    
    switch(action.type) {
        case FETCH_USER :
            return (action.payload === '' || !action.payload) ? false : action.payload;//Return payload or false (avoiding empty strings or obj)
        default:
            return state;
    }
}