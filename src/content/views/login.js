/**
 * Created by Administrator on 2017/7/10.
 */

import React from 'react';

import {hashHistory} from 'react-router';

class Logintest extends React.Component {
    constructor(prop) {
        super(...arguments);
        this.state = sessionStorage.getItem("username")?{data:{username:sessionStorage.getItem("username")}}:null;
    }

    componentDidMount() {

    }

    render() {
        if (this.state) {
            return (
                <div className="recommend-3">
                    <div className="weather-top">
                        <span>欢迎您</span>
                        <p>{this.state.data.username}</p>
                    </div>
                    <hr/>
                    <div className="weather-down"></div>
                </div>
            )
        }

        return (
            <div className="recommend-3">
                <div className="weather-top">
                    <span>请先登录</span>
                    <p></p>
                </div>
                <hr/>
                <div className="weather-down"></div>
            </div>
            /*<div className="recommend-3">
                <form action="login_form">
                    <input id="username" name="username" type="text"/>
                    <input id="password" name="password" type="text"/>
                </form>
                <a href="javascript:void(0)" onClick={
                    () => {//formdata
                        let formData = new FormData();
                        formData.append('username', document.getElementById('username').value);
                        formData.append('passwd', document.getElementById('password').value);

                        let options = {};
                        options.headers = [];
                        options.headers['Content-Type'] = 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d';
                        options.body = formData;
                        options.method = 'POST'

                        console.log(formData);
                        fetch('/sign_in', options
                        ).then((response) => {
                            if (response.status !== 200) {
                                throw new Error('Fail to get response with status ' + response.status);
                            }
                            response.json().then((responseJson) => {
                                console.log(responseJson.data);
                                this.setState({data: responseJson.data});
                            }).catch((error) => {
                                this.setState({data: null});
                            });
                        }).catch((error) => {
                            this.setState({data: null});
                        });
                    }
                }>提交
                </a>
            </div>*/
        )
    }
}

export default Logintest;