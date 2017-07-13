/**
 * Created by Administrator on 2017/7/2.
 */
import {CHANGE_PAGE, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

let nextSeqId = 0;

export const ChangePage = (result) => ({
    type: CHANGE_PAGE,
    result
});


export const fetchPage = (newpage) => {
    return (dispatch) => {

        let formData = new FormData();
        formData.append('want_page', newpage);
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
                console.log(this.state);
                dispatch(ChangePage(responseJson.data));
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }
}


export const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
});

export const fetchWeatherSuccess = () => ({
    type: FETCH_SUCCESS
});

export const fetchWeatherFailure = () => ({
    type: FETCH_FAILURE
});

export const fetchWeather = () => {
    return (dispatch) => {
        const apiUrl = `/data/cityinfo/${101010100}.html`;

        const seqId = ++nextSeqId;

        const dispatchIfValid = (action) => {
            if (seqId === nextSeqId) {
                return dispatch(action);
            }
        }

        dispatchIfValid(fetchWeatherStarted())

        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
            }).catch((error) => {
                dispatchIfValid(fetchWeatherFailure(error));
            });
        }).catch((error) => {
            dispatchIfValid(fetchWeatherFailure(error));
        })
    };
}