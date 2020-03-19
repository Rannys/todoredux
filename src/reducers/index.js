import TodoReducer from './todoReducers'
import {combineReducers} from 'redux'

export default combineReducers({
    todo : TodoReducer
})
