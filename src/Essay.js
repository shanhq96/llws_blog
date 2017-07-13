/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react';
import {view as Login} from './login/';
import {view as Symbol} from './symbol/';
import {view as Nav} from './nav/';
import {view as Blogcontent} from './blogcontent/';
import {view as Footer} from './footer/';

import './style.css';

function Essay() {
    return (
        <div className="myRoot">
            <Login/>
            <Symbol />
            <Nav />
            <Blogcontent/>
            <Footer />
        </div>
    )
};

export default Essay;