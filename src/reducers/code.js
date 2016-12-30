import {
    CODE_BLOCK_TRANSPARENCY,
    CODE,
    DISABLE_IFRAME_UPDATE,
    ENABLE_IFRAME_UPDATE,
    PAUSE_IFRAME_UPDATE
} from '../actions';

const initialState = {
    codeBlockTransparency:.85,
    code:``,
    updateScene:true,
    reloadFrame:false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CODE_BLOCK_TRANSPARENCY:
            return {...state, codeBlockTransparency:action.data};
        case CODE:
            return{...state, code:action.data, example: action.path || state.example, reloadFrame: action.path ? true : false};
        case DISABLE_IFRAME_UPDATE:
            return{...state, updateScene:true, reloadFrame:false}
        case ENABLE_IFRAME_UPDATE:
            return{...state, reloadFrame:true}
        case PAUSE_IFRAME_UPDATE:
            return{...state, updateScene:false}
        default:
            return state;
    }
}
