/**
 * Created by Administrator on 2017/7/2.
 */
import {CHANGE_PAGE}from './actionTypes.js';

import {NEXT_PAGE, LAST_PAGE, THIS_PAGE} from './actionTypes.js';

export default (state = {blog_list:[],total_blog_num:0,want_page:0}, action) => {
    switch(action.type) {
        case CHANGE_PAGE: {
            return {...action.result};
        }
        default: {
            return state;
        }
    }
}