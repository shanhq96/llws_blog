/**
 * Created by Administrator on 2017/7/6.
 */
import React from 'react';

import {Link} from 'react-router';

import './style.css';

export default () => {
    return (
        <div className="nav">
            <ul className="nav-ul">
                <li className="nav-li">
                    <Link to="/">首页</Link>
                </li>
                <li className="nav-li"><a href="">一个菜单</a>
                    <div className="second-box">
                        <ul className="second-ul">
                            <li className="second-li"><a href="">二层第一</a></li>
                            <li className="second-li"><a href="">二层第二</a></li>
                            <li className="second-li"><a href="">二层第三</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-li"><a href="">二个菜单</a>
                    <div className="second-box">
                        <ul className="second-ul">
                            <li className="second-li"><a href="">二层第一</a></li>
                            <li className="second-li"><a href="">二层第二</a></li>
                            <li className="second-li"><a href="">二层第三</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-li"><a href="">三个菜单</a>
                    <div className="second-box">
                        <ul className="second-ul">
                            <li className="second-li"><a href="">二层第一</a></li>
                            <li className="second-li"><a href="">二层第二</a></li>
                            <li className="second-li"><a href="">二层第三</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            {/*<a href="#searchbox" className="search">搜索</a>*/}
            {/*<input id="searchbox" className="searchbox"/>*/}
        </div>
    );
}