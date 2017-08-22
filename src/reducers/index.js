import { combineReducers } from 'redux'
import AppReducer from './app_reducers'

const rootReducer = combineReducers({
  astronomy: AppReducer
})

export default rootReducer
