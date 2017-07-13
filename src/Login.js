/**
 * Created by Administrator on 2017/7/11.
 */
import React from 'react';

import {Router, Route, hashHistory, withRouter, browserHistory} from 'react-router';

import './login_style.css';

class Login extends React.Component {

    constructor() {

        super(...arguments);

        this.state = {data: null};

    }

    render() {
        return (
            <div className="bodybox">
                <div className="login_logo">
                    <h1>个人博客</h1>
                </div>
                <div>
                    <label>
                        <input className="text text1" type="text" id="username" placeholder="用户名"/>
                    </label>
                    <label>
                        <input className="text text2" type="text" id="password" placeholder="密码"/>
                    </label>
                </div>
                <div>
                    <button className="login_submit_button" onClick={
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
                            fetch('/userinfo/sign_in', options
                            ).then((response) => {
                                if (response.status !== 200) {
                                    throw new Error('Fail to get response with status ' + response.status);
                                }
                                response.json().then((responseJson) => {
                                    console.log(responseJson.data);
                                    sessionStorage.setItem("username", document.getElementById('username').value);
                                    browserHistory.push({
                                        pathname: '/'
                                    });
                                }).catch((error) => {
                                    browserHistory.push({
                                        pathname: '/'
                                    });
                                });
                            }).catch((error) => {
                                browserHistory.push({
                                    pathname: '/'
                                });
                            });
                        }
                    }>提交
                    </button>
                </div>
            </div>
        )
    }

}
;

export default withRouter(Login);