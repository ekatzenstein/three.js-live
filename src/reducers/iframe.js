import {
    IFRAME_DESTROY,
    IFRAME_RESET
} from '../actions';

const initialState = {
    render:true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case IFRAME_DESTROY:
            return {...state, render:false};
        case IFRAME_RESET:
            return {...state, render:true};
        default:
            return state;
    }
}
