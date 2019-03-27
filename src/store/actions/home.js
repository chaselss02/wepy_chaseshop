import * as HOME from '../types/home'
import { createAction } from 'redux-actions'
import wepy from 'wepy';
export const asyncDataLabel = createAction(HOME.ASYNCDATALABEL, (data) => {
    return wepy.request({
        url: 'https://www.easy-mock.com/mock/5c91ab697f384a6c909389d6/chase/shop/api/product/labellist', //开发者服务器接口地址",
        data: data, //请求的参数",
        method: 'GET'
    })
})

export const asyncDataProduct = createAction(HOME.ASYNCDATAPRODUCT, (id) => {
    return wepy.request({
        url: 'https://www.easy-mock.com/mock/5c91ab697f384a6c909389d6/chase/shop/api/product/productlist', //开发者服务器接口地址",
        data: {
            id
        }, //请求的参数",
        method: 'GET'
    })
})