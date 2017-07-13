/**
 * Created by Administrator on 2017/7/2.
 */
import React from 'react';
import BlogList from './blogList.js';
import Recommend from './recommend.js';

import './style.css';

export default () => {
    return (
        <div className="content">
            <BlogList />
            <Recommend />
        </div>
    );
}