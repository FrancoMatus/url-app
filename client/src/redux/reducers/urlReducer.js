import {
    GET_ALL_URLS, 
    CREATE_URL,
    GET_UNIQUE_URL
} from '../Constants';
const initialState = {
   allUrl: [],
   uniqueUrl: {}
}

export default function urlReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_URLS:
            return {
                ...state,
                allUrl: action.payload
            }
        case CREATE_URL:
            return{
                ...state,
                allUrl: state.allUrl.concat(action.payload)
            }
        case GET_UNIQUE_URL:
            return {
                ...state,
                uniqueUrl: action.payload
            }
            default:
                return state;
        }
}