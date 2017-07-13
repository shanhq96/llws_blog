/**
 * Created by Administrator on 2017/7/2.
 */
import React from 'react';
import {view as Login} from './login/';
import {view as Symbol} from './symbol/';
import {view as Nav} from './nav/';
import {view as Header} from './header/';
import {view as Content} from './content/';
import {view as Footer} from './footer/';

import './style.css';

function Blog() {
    return (
        <div className="myRoot">
            <Login/>
            <Symbol />
            <Nav />
            <Header />
            <Content />
            <Footer />
        </div>
    )
};

export default Blog;