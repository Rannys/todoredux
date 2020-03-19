import { ADD_TODO } from './type'
import {DELETE_BTN} from'./type'
import {COMPLETE_BTN} from './type'
import {EDIT_BTN} from './type'

export const AddBtn = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }

}
export const Delete = deletedid =>{
    return{
        type :DELETE_BTN,
        payload: deletedid
    }
}
export const Complete = completed =>{
    return {
        type : COMPLETE_BTN,
        payload : completed
    }
}
export const Edit = updatedTodo =>{
    return{
        type : EDIT_BTN,
        payload : updatedTodo 
    }
}