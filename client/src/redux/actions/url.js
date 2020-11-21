import axios from 'axios';
import {
    GET_ALL_URLS, 
    CREATE_URL,
    GET_UNIQUE_URL,
    REPEAT_URL
} from '../Constants';

export const getAllUrl = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/domain')
        .then( res => dispatch({ type: GET_ALL_URLS, payload: res.data }))
        .catch( err => console.log ( err ));
    }
}

export const addUrl = (data) => {
    return function(dispatch){
        return axios.post('http://localhost:3001/shorten', data)
        .then( res => {
            if(res.data[0] === "existe"){
                dispatch({ type: REPEAT_URL, payload: res.data })
            } else {
                dispatch({ type: CREATE_URL, payload: res.data })
            }
        })
        .catch( err => console.log( err ));
    }
}


export const getUrlById = (_id) => {
    return function(dispatch){
        return axios.get(`http://localhost:3001/domain/${_id}`)
        .then( res => dispatch({ type: GET_UNIQUE_URL, payload: res.data }))
        .catch( err => console.log( err ));
    }
}