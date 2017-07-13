/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react';
import {Link} from 'react-router';
import './style.css';

export default () => {
    return (
        <div className="login">
            <Link to="/" className="homepage">首页</Link>
            <Link href="/Login" className="button">登录</Link>
        </div>
    );
}