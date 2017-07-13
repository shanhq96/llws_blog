/**
 * Created by Administrator on 2017/7/2.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import OneBlog from './oneblog.js';

import {actions as pageActions} from '../../content';


import './style.css';

class BlogList extends React.Component {
    constructor(prop) {

        super(prop);


        this.setSet = this.setSet.bind(this);
        this.setNext = this.setNext.bind(this);
        this.setUp = this.setUp.bind(this);
        this.fetchPage = this.fetchPage.bind(this);

        this.state = {blog_list: [], total_blog_num: 0, want_page: 0,_id:'0'};

        let formData = new FormData();
        formData.append('want_page', 0);
        formData.append('want_data_per_page', 3);
        formData.append('is_top', false);

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



    fetchPage() {

        //设置总页数
        let formData = new FormData();
        formData.append('want_page', 0);
        formData.append('want_data_per_page', 3);

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
                console.log(responseJson.data);
                this.setState(responseJson.data);
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    setSet(obj) {
        this.setState(obj);
    }

    //下一页
    setNext() {
        if (this.state.want_page+1 < Math.ceil(this.state.total_blog_num/3)) {
            this.setState({
                want_page: this.state.want_page + 1
            }, function () {
                //设置总页数
                let formData = new FormData();
                formData.append('want_page', this.state.want_page);
                formData.append('want_data_per_page', 3);

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
                        console.log(responseJson.data);
                        this.setState(responseJson.data);
                    }).catch((error) => {
                        console.log(error);
                    });
                }).catch((error) => {
                    console.log(error);
                });
                console.log(this.state)
            })
        }
    }

    //上一页
    setUp() {
        if (this.state.want_page +1> 1) {
            this.setState({
                want_page: this.state.want_page - 1
            }, function () {
                let formData = new FormData();
                formData.append('want_page', this.state.want_page);
                formData.append('want_data_per_page', 3);

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
                        console.log(responseJson.data);
                        this.setState(responseJson.data);
                    }).catch((error) => {
                        console.log(error);
                    });
                }).catch((error) => {
                    console.log(error);
                });
                console.log(this.state)
            })
        }
    }

    render() {
        return (
            <div className="bloglist">
                <ul className="bloglist-ul">
                    {
                        this.state.blog_list.map(function (cont) {

                            return <OneBlog {...cont} />
                        })
                    }
                </ul>
                <div className="change_page">
                    <button className="pageChanger" onClick={ this.setUp }>上一页</button>
                    <span>{ this.state.want_page +1}页/ { Math.ceil(this.state.total_blog_num/3) }页</span>
                    <button className="pageChanger" onClick={ this.setNext }>下一页</button>
                </div>
            </div>
        );
    }
}
export default BlogList;

/*class BlogList extends React.Component {

 constructor() {
 super(...arguments);

 }

 componentDidMount() {
 const defaultpage = 0;
 this.props.onChangePage(defaultpage);
 }

 render(){
 return (
 <div className="bloglist">
 <ul className="bloglist-ul">
 {/!*{*!/}
 {/!*blog_list.map(function (cont) {*!/}
 {/!*return <OneBlog {...cont} />*!/}
 {/!*})*!/}
 {/!*}*!/}
 </ul>
 </div>
 )
 };

 }

 const mapDispatchToProps = (dispatch) => {
 return {
 onChangePage: (i_want_page) => {
 dispatch(pageActions.fetchPage(i_want_page));
 }
 }
 }

 export default connect(null, mapDispatchToProps)(BlogList);*/



