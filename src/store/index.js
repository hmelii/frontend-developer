import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';
import randomId from './../middlewares';
import { save } from 'redux-localstorage-simple';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(thunk, randomId, save({namespace: 'books'})));

const store = createStore(rootReducer, enhancer);

export default store;