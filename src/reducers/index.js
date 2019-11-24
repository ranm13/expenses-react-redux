import balanceReducer from "./balanceReducer";
import transactionsReducer from "./transactionsReducer";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  auth: authReducers,
  errors: errorReducers,
  balance: balanceReducer,
  transactions: transactionsReducer
});

export default allReducers;
