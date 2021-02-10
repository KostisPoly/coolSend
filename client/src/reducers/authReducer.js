const  initialState = {
    state: null,
    authenticated: null
}

export default function auth(state = initialState, action) {
    
    console.log(action);
    switch(action.type) {
        default:
            return state;
    }
}