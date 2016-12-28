import {
    LOAD_EXAMPLES
} from '../actions';


const initialState = {
    exampleFiles:{}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOAD_EXAMPLES:
            return {...state,
                exampleFiles:action.data
            };
        default:
            return state;
    }
}
