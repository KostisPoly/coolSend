import { REDIRECT } from '../actions/types';

const redirect = (state = {}, action) => {
    switch (action.type) {
        case REDIRECT:
            return { redirectTo: action.payload };
        default:
            return state;
    }
};

export default redirect;