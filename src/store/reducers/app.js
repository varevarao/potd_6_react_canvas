import { app as actionTypes } from '../actions/actionTypes';

const inititalState = {
    loadState: false,
    externals: {}
}

const appReducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.EXTERNALS_LOADED:
            return {
                ...state,
                externals: {
                    ...state.externals,
                    ...action.payload
                }
            }
        default:
    }

    return state;
}

export default appReducer;