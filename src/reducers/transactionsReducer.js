const transactionsReducer = (state = [], action) =>{
    switch(action.type){
        case('LOADTRANSCTIONS'):
            return ['Fully loaded']
        default: 
            return [] 
    }
}

export default transactionsReducer