import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import templateReducer from './templateReducer';
import redirectReducer from './redirectReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    template: templateReducer,
    redirect: redirectReducer
})