import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';
import authReducers from './authReducers';
import errorReducers from './errorReducers';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    auth: authReducers,
    errors: errorReducers,
    userData: userReducer,
    transactions: transactionsReducer
})

export default allReducers