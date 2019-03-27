import * as ORDER from '../types/order'
import { createAction } from 'redux-actions'
import wepy from 'wepy';
export const asyncGetOrderList = createAction(ORDER.ASYNCGETORDERLIST, (data) => {
    return wepy.request({
        url: 'https://www.easy-mock.com/mock/5c91ab697f384a6c909389d6/chase/shop/api/order/list', //开发者服务器接口地址",
        data: data, //请求的参数",
        method: 'GET'
    })
})

