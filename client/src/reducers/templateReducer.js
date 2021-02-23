import { FETCH_TEMPLATE } from '../actions/types'

export default function temp(state = null, action) {
    switch(action.type) {
        case FETCH_TEMPLATE :
            return (action.payload === '' || !action.payload) ? false : action.payload;//Return payload or false (avoiding empty strings or obj)
        default:
            return state;
    }
}