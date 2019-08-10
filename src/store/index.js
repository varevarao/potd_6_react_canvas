import { applyMiddleware, compose, createStore } from 'redux';
import { load, save } from 'redux-localstorage-simple';
import rootReducer from './reducers';

const LOCALSTORAGE_CONFIG = {
    namespace: 'component-canvas',
    debounce: 1000
};

const middleware = [
    save(LOCALSTORAGE_CONFIG),
];

const composeEnhancers =
    (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
        compose;

const initializeStore = () => {
    return createStore(
        rootReducer,
        load(LOCALSTORAGE_CONFIG),
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
}

export default initializeStore;