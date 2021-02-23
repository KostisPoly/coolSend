import axios from 'axios'
import { FETCH_USER, FETCH_TEMPLATE } from './types'

export const fetchUser = () => {
    return function (dispatch) {
        axios.get('/api/current_user')
            .then(res => dispatch({ type: FETCH_USER, payload: res.data}))//PASS data attr of response as payload
        }
    
}

export const fetchTemplate = (template) => {
    return function (dispatch) {
        axios.get('/api/pick_template',{params: { template }})
            .then(res => dispatch({ type: FETCH_TEMPLATE, payload: res.data}))//PASS data attr of response as payload
        }
    
}