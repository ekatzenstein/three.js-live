import {SEARCH} from '../actions';

const initialState = {
    searchQuery:'',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {...state,
                searchQuery:action.data
            };
        default:
            return state;
    }
}
