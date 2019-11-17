const transactionsReducer = (state = [], action) =>{
    switch(action.type){
        case('LOAD_TRANSCTIONS'):
            return [...action.payload]
        case('PUSH_TRANSACTION'): 
            return [ action.payload.newTransaction , ...state]
        case('DELETE_TRANSACTION'):
            return [...action.payload.transactions]
        default: 
            return state 
    }
}

export default transactionsReducer