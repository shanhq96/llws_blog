import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Blog from './Blog';
import Routes from './Routes'

import store from './Store.js';

//.43.138
// ReactDOM.render(
//     <Routes />,
//     document.getElementById('root')
// );

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);
