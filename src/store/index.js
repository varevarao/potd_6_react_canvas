import { applyMiddleware, compose, createStore } from 'redux';
import { load, save } from 'redux-localstorage-simple';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const LOCALSTORAGE_CONFIG = {
    namespace: 'component-canvas',
    debounce: 1000
};

const middleware = [
    save(LOCALSTORAGE_CONFIG),
    thunk
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