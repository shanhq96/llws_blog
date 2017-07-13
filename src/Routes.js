/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import Blog from './Blog.js';
import Essay from './Essay.js'
import Wrong from './Error.js';
import Login from './Login.js'


const history = browserHistory;

const Routes = () => (
    <Router history={history}>
        <Route path="/" component={Blog}/>
        <Route path="essay" component={Essay}/>
        <Route path="login" component={Login}/>
    </Router>
);

export default Routes;
