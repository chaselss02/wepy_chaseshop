import { handleActions } from 'redux-actions'
import * as HOME from '../types/home'

export default handleActions({
    [HOME.ASYNCDATALABEL](state, action) {
        let result = action.payload.data;
        if (!result) return;
        if (result.length === 0) {
            result.push({
                id: 0,
                name: "默认分类",
            })
        }
        return {
            ...state,
            dataLabel: result.concat({
                id: 'button',
                name: "添加分类",
                type: 'button'
            })
        }
    },
    [HOME.ASYNCDATAPRODUCT](state, action) {
        let result = action.payload.data;
        return {
            ...state,
            dataProduct: result
        }
    }
}, {
        dataProduct: {},
        dataLabel: [],
    })