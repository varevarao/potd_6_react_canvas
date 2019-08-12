import { app as actionTypes } from './actionTypes';

export const externalsLoaded = externals => ({
    type: actionTypes.EXTERNALS_LOADED,
    payload: externals
})