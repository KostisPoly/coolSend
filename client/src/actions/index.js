import axios from 'axios'
import { FETCH_USER, FETCH_TEMPLATE, REDIRECT } from './types'

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

export const submitCampaign = (values) => {
    return function (dispatch) {
        axios.post('/api/campaign', values)
            .then(res => {
                dispatch({ type: FETCH_USER, payload: res.data})
                dispatch(redirect('/dashboard'))
            })

    }
}

// action creators
export const redirect = link => {
    console.log("=== REDIRECT ACTION DISPATCHED ===");
    return { type: REDIRECT, payload: link };
};