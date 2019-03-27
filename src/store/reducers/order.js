import { handleActions } from 'redux-actions'
import * as ORDER from '../types/order'

export default handleActions({
    [ORDER.ASYNCGETORDERLIST](state, action) {
        let orderList = action.payload.data.list;
        return {
            ...state,
            orderList
        }
    }
}, {
        orderList: [],
    })