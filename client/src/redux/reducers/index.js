import urlReducer from './urlReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    allUrl: urlReducer,
});

export default rootReducer;