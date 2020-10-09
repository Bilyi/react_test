import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movies from './movies/reducer';

const reducers = {
    movies
};

export const initStore = (initialState = {}) => {
    const reducer = combineReducers(reducers);
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose ;
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
    window.store = store;

    return store;
};