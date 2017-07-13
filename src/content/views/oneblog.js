/**
 * Created by Administrator on 2017/7/11.
 */
import React from 'react';

import {Link} from 'react-router';

import './style.css';


class OneBlog extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {_id, title, title_img_url, describe} = this.props;
        const time = 0;
        let style = {
            backgroundImage: 'url(' + title_img_url + ')',
            backgroundSize:`cover`
        };

        return (
            <li className="bloglist-li">
                <div className="ablog">
                    <div className="blogimg" style={style}></div>
                    <div className="blogcontent">
                        <span>{title}</span>
                        <p>{describe}</p>
                        <Link to={{pathname: "/essay", query: {blog_id: _id},}} id={_id} className="detail">阅读全文
                        </Link>
                    </div>
                </div>
            </li>
        )
    }

}

export default OneBlog;