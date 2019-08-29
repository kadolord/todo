import axios from 'axios';

import {ADD_ITEM, ERROR} from './type';

const server = 'http://localhost:5000'

export const addItem  = (title)  => {
    return (dispatch) => {
        axios.post(`${server}/addTodo`, {
            title: title
        }).then((res) => {
            console.log(res)
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }   
}