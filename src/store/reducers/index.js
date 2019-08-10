import { combineReducers } from 'redux';
import app from './app';
import canvas from './canvas';
import grid from './grid';

const rootReducer = combineReducers({
    app,
    grid,
    canvas
});

export default rootReducer;