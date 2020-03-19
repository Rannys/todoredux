import { ADD_TODO, DELETE_BTN,COMPLETE_BTN , EDIT_BTN  } from "../actions/type"


let initState = []


const TodoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
            break;
        case DELETE_BTN:
            return state.filter(el => action.payload !== el.id)
            break;
        case COMPLETE_BTN:
            return state.map(el => el.id === action.payload ? {...el, complete : !el.complete}: el)
            break;
        case EDIT_BTN:
            return state.map(el=> el.id === action.payload.id ? action.payload : el)
        default:
            return state
    }
}


export default TodoReducer