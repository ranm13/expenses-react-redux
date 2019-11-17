const balanceReducer = (state = 0, action) =>{
    switch(action.type){
        case('LOAD_BALANCE'): 
            return action.payload
        case('PUSH_TRANSACTION'): 
            return action.payload.balance
        case('DELETE_TRANSACTION'):
            return action.payload.balance
        default: 
            return state
    }
}

export default balanceReducer