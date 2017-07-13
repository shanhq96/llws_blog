/**
 * Created by Administrator on 2017/7/13.
 */
import React from 'react';

import {Link} from 'react-router';

import './style.css';


class OneHeader extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {_id, title, title_img_url, describe} = this.props;
        let style = {
            backgroundImage: 'url(' + title_img_url + ')',
            backgroundSize:`cover`
        };

        return (
            <li style={style}><Link  to={{pathname: "/essay", query: {blog_id: _id},}} id={_id}><div className="top-essay"></div></Link></li>
        )
    }

}

export default OneHeader;