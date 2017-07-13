/**
 * Created by Administrator on 2017/7/9.
 */

import React from 'react';


class Weather extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {min_temperature: '', max_temperature: '', date_y: '',cityname:'',weather:''};

        console.log(1123112313);

        let formData = new FormData();

        formData.append('city_name', '哈尔滨');

        let options = {};
        options.headers = [];
        options.headers['Content-Type'] = 'multipart/form-data;';
        options.body = formData;
        options.method = 'POST';

        fetch('/weather/get_weather',options).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then((responseJson) => {
                console.log(responseJson.data);
                this.setState(responseJson.data);
            }).catch((error) => {
                this.setState(error);
            });
        }).catch((error) => {
            this.setState(error);
        });
    }


    render() {


        return (
            <div className="recommend-1">
                <div className="weather-top">
                    <span>{this.state.min_temperature}℃-{this.state.max_temperature}℃</span>
                    <p></p>
                </div>
                <hr/>
                <div className="weather-down">
                    <span>{this.state.city_name} {this.state.weather}</span>
                </div>
            </div>
        )
    }
}

export default Weather;

/*import React, {PropTypes} from 'react';
 import {connect} from 'react-redux';
 import * as Status from '../status.js';

 import './style.css';

 const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
 switch (status) {
 case Status.LOADING: {
 return (
 <div className="recommend-1">
 <div className="weather-top">
 <span>请求中···</span>
 <p></p>
 </div>
 <hr/>
 <div className="weather-down"></div>
 </div>
 )
 }
 case Status.SUCCESS: {
 return (
 <div className="recommend-1">
 <div className="weather-top">
 <span>{lowestTemp}-{highestTemp}</span>
 <p>{cityName} {weather}</p>
 </div>
 <hr/>
 <div className="weather-down"></div>
 </div>
 )
 }
 case Status.FAILURE: {
 return (
 <div className="recommend-1">
 <div className="weather-top">
 <span>天气信息装载失败</span>
 <p></p>
 </div>
 <hr/>
 <div className="weather-down"></div>
 </div>
 )
 }
 default: {
 throw new Error('unexpected status ' + status);
 }
 }
 }

 Weather.propTypes = {
 status: PropTypes.string.isRequired,
 cityName: PropTypes.string,
 weather: PropTypes.string,
 lowestTemp: PropTypes.string,
 highestTemp: PropTypes.string
 };

 const mapStateTopProps = (state) => {
 const weatherData = state.weather;

 return {
 status: weatherData.status,
 cityName: weatherData.city,
 weather: weatherData.weather,
 lowestTemp: weatherData.temp1,
 highestTemp: weatherData.temp2
 };
 }

 export default connect(mapStateTopProps)(Weather);*/
