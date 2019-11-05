import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';
import isLoggedIn from './isLoggedIn';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    userData: userReducer,
    transactions: transactionsReducer,
    isLoggedIn
})

export default allReducers