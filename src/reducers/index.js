import userReducer from './userReducer';
import transactionsReducer from './transactionsReducer';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    userData: userReducer,
    transactions: transactionsReducer
})

export default allReducers