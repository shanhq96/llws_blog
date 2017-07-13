/**
 * Created by Administrator on 2017/7/2.
 */
import React from 'react';

import Weather from './weather.js';
import Logintest from './login.js'

import './style.css';

const Recommend = () => {
    return (
        <div className="recommend">
            <Weather/>
            <div className="recommend-2-1">
            </div>
            <div className="recommend-2-2">
            </div>
            <Logintest />
            <div className="recommend-4">
            </div>
        </div>
    )
};

export default Recommend;
