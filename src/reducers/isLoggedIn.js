const isLoggedIn = (state = false, action) =>{
    switch(action.type){
        case('LOGIN'):
            return true
        case('SIGNUP'):
            return true
        case('LOGOUT'):
            return false
        default: 
            return state
    }
}

export default isLoggedIn