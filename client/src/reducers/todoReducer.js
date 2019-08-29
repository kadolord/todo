
import {
    ADD_ITEM,
    DELETE_ITEM ,
    ERROR
} from '../actions/type';
import { isError } from 'util';


const initialState = {
    todoList: [],
    todo: '',
    isAdding: false,
    isError: false
}


export default (state = initialState, action) => {
    switch(action){
        case ADD_ITEM:
            return {
                ...state,
                isAdding: true
            }
        case ERROR: 
            return {
                ...state,
                isError: true
            }
        default: 
            return state;
    }
}