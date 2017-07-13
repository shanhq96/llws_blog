/**
 * Created by Administrator on 2017/7/10.
 */
import React from 'react';
import Collect from './collect.js'

import './style.css';

class Mycontent extends React.Component {
    constructor(props) {
        super(props);

        console.log(window.location.href.split("=")[1]);

        this.state = {_id: [], title: '', update_time: '',content:''};

        let formData = new FormData();

        formData.append('blog_id', window.location.href.split("=")[1]);

        let options = {};
        options.headers = [];
        options.headers['Content-Type'] = 'multipart/form-data;';
        options.body = formData;
        options.method = 'POST';


        fetch('/blog/get_one_blog', options
        ).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                console.log(responseJson.data);
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
            <div className="textcontent">
                <div className="title"><h1>{this.state.title}</h1></div>
                <hr/>
                <div className="neck">标签：综合 &nbsp;&nbsp;&nbsp; {this.state.update_time}</div>
                <hr/>
                <div className="textbody" dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                <hr/>
                <Collect/>
            </div>
        )
    }

}

export default Mycontent;