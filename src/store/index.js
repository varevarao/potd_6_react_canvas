import { applyMiddleware, createStore } from 'redux';
import { load, save } from 'redux-localstorage-simple';
import rootReducer from './reducers';

const LOCALSTORAGE_CONFIG = {
    namespace: 'component-canvas',
    debounce: 1000
};

const initializeStore = () => {
    return createStore(rootReducer,
        load(LOCALSTORAGE_CONFIG),
        applyMiddleware(save(LOCALSTORAGE_CONFIG))
    );
}

export default initializeStore;