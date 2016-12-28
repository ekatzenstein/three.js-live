import {
    CODE_TOGGLE,
    SIDEBAR_TOGGLE,
    DISABLE_ANIMATE
} from '../actions';

const left_width=.25

const initialState = {
    sb: true,
    cb: false,
    animateCode:false,
    left:left_width
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SIDEBAR_TOGGLE:
            const left = state.sb
                ? 0
                : left_width;
            return {...state,
                sb: !state.sb,
                animateCode:true,
                left
            };
        case CODE_TOGGLE:
            return {...state,
                cb: !state.cb,
                animateCode:true
            };
        case DISABLE_ANIMATE:
            return {...state,
                animateCode:false
            };
        default:
            return state;
    }
}
