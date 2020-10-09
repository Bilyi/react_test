import {
    GET_INFO,
    TOGGLE_MODAL,
    SET_ACTIVE_MOVIE,
    SET_NEXT_MOVIE
} from './constants';

const defaultState = {
    isActiveModal: false,
    activeMovie: {}
};

export default (state = defaultState, action) => {
    const { type, data } = action;

    switch (type) {
        case GET_INFO:
            return Object.assign({}, state, data);
        case TOGGLE_MODAL:
            return Object.assign({}, state, {
                isActiveModal: !state.isActiveModal
            });
        case SET_ACTIVE_MOVIE:
            return Object.assign({}, state, {
                activeMovie: data
            });
        case SET_NEXT_MOVIE:
            const nextIndex = data + 1;
            console.log(state);
            const nextMovie = state.results && state.results.length ? state.results[nextIndex] : {};
            nextMovie.index = nextIndex;
            console.log(nextMovie);
            return Object.assign({}, state, {
                activeMovie: nextMovie
            });
        default:
            return state;
    }
};
