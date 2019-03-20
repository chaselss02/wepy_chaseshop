import { GETPEODUCTLIST } from '../types/home'
import { createAction } from 'redux-actions'
import wepy from 'wepy';
export const asyncProList = createAction(GETPEODUCTLIST, () => {
    return wepy.request({
        url: 'https://www.easy-mock.com/mock/5c91ab697f384a6c909389d6/chase/shop/api/productadmin/list', //开发者服务器接口地址",
        data: '', //请求的参数",
        method: 'GET'

    })


})