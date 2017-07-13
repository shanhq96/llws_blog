/**
 * Created by Administrator on 2017/7/6.
 */
import React from 'react';

import {Link} from 'react-router';
import OneHeader from './headerOne.js'

import './style.css';


class Header extends React.Component {
    constructor(prop){
        super(prop);

        this.state = {blog_list: [], total_blog_num: 0, want_page: 0,_id:'0'};


        let formData = new FormData();
        formData.append('want_page', 0);
        formData.append('want_data_per_page', 3);
        formData.append('is_top', true);

        let options = {};
        options.headers = [];
        options.headers['Content-Type'] = 'multipart/form-data;';
        options.body = formData;
        options.method = 'POST';


        fetch('/blog/get_blog_list', options
        ).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                this.setState(responseJson.data);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });

    }


    render(){

        return (
            <div className="header">
                <div className="swiper">
                    <div>
                        <div className="slide">
                            <ul className="slide-auto">
                                {
                                    this.state.blog_list.map(function (cont) {
                                        return <OneHeader {...cont} />
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="myself">
                    <h1>关于博主</h1>
                </div>
            </div>
        );
    }
}

export default Header;
