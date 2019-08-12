import { canvas as actionTypes } from '../actions/actionTypes';

const inititalState = {
    elements: []
};

const canvasReducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CHILD:
            return {
                ...state,
            }
    }

    return state;
}

export default canvasReducer;