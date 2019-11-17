const userReducer = (state = {}, action) =>{
    switch(action.type){
        case('PUSHTRANSACTION'): 
            return {...state, balance: action.payload.balance}
        case('DELETETRANSACTION'):
            return {...state, balance: action.payload.balance}
        default: 
            return state
    }
}

export default userReducer