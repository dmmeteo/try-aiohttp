import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import {ping} from './enhancers/ping';

const middleware = [logger, ping];
export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );

    return store
}