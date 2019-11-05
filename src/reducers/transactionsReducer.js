const transactionsReducer = (state = [], action) =>{
    switch(action.type){
        case('LOADTRANSCTIONS'):
            return [...action.payload]
        case('PUSHTRANSACTION'): 
            return [ action.payload.newTransaction , ...state]
        default: 
            return state 
    }
}

export default transactionsReducer