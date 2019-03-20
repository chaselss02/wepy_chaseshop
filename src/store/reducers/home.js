import { handleActions } from 'redux-actions'
import * as HOME from '../types/home'

export default handleActions({
    [HOME.GETPEODUCTLIST](state, action) {
        console.log(action);
        return {
            ...state,
            productList: action.payload.data
        }
    }
}, {
        productList: []
    })