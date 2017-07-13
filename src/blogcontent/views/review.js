/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react';

import './style.css';

export default () => {
    return (
        <div className="review">
            <div>
                <ul className="review-ul">
                    <li>
                        <div>
                            王臻卓 2017-07-10
                        </div>
                        <div>
                            这个不错
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <div>
                            王臻卓 2017-07-10
                        </div>
                        <div>
                            这个不错
                        </div>
                        <hr/>
                    </li>
                    <li>
                        <div>
                            王臻卓 2017-07-10
                        </div>
                        <div>
                            这个不错
                        </div>
                        <hr/>
                    </li>
                </ul>
            </div>
            <div>
                <input className="reviewbox" placeholder="最多输入140字"/>
                <div className="reviewsubmit">
                    <a href="javascript:void(0)">评论</a>
                </div>
            </div>
        </div>
    )
}