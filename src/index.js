import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './js/state/store';
import Movies from './js/components/movies/movies';

import './css/style.scss';

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <Movies/>
    </Provider>,
    document.getElementById('app')
);