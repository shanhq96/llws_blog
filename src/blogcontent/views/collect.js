/**
 * Created by Administrator on 2017/7/13.
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

        return (
            <div className="collectButton" onClick={
                alert(1111)
            }></div>
        )
    }

}

export default OneBlog;