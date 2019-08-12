import { app as actionTypes } from './actionTypes';

export const externalsLoaded = externals => ({
    type: actionTypes.EXTERNALS_LOADED,
    payload: externals
})

export const reoladExternals = () => dispatch => {
    return import('../../external')
        .then(externals => {
            const modules = {};
            // Externals is an object that contains all the exports
            for (let [key, external] of Object.entries(externals.default)) {
                modules[key] = external;
            }
            dispatch(externalsLoaded(modules));
        })
}