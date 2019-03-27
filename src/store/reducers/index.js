import { combineReducers } from 'redux'
import counter from './counter'
import home from './home'
import order from './order'

export default combineReducers({
  counter,
  home,
  order
})