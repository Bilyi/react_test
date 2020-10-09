import axios from 'axios';
import {
    GET_INFO,
    TOGGLE_MODAL,
    SET_ACTIVE_MOVIE,
    SET_NEXT_MOVIE
} from './constants';

const MOVIES_API = 'http://api.themoviedb.org/3/movie/now_playing';
const KEY_API = 'ebea8cfca72fdff8d2624ad7bbf78e4c';

export function fetchData(page = 1) {
    return dispatch => {
        return axios
            .get(`${MOVIES_API}?api_key=${KEY_API}&page=${page}`)
            .then(response => {
                console.log(response);
                dispatch(getInfo(response.data));
            })
            .catch(error => {
                console.log('error', error);
            });
    };
}

export const toggleMovieModal = () => {
    return {
        type: TOGGLE_MODAL
    };
};

export const getInfo = (data) => {
    return {
        type: GET_INFO,
        data: data
    };
};

export const setActiveMovie = (movie, index) => {
    return {
        type: SET_ACTIVE_MOVIE,
        data: {
            ...movie,
            index
        }
    };
};

export const setNextMovie = (index) => {
    console.log('setNextMovie', index);
    return {
        type: SET_NEXT_MOVIE,
        data: index
    };
};
