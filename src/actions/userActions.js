import axios from 'axios'
export const login = (userData) => dispatch =>{
    let response = axios.get(`http://localhost:4000/users/login/${userData.username}/${userData.password}`)
        response.then(({data})=> {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        })
}

export const signup = (userData) => dispatch =>{
    let response = axios.post(`http://localhost:4000/users/signup`, userData)
        response.then(({data})=> {
            dispatch({
                type: 'SIGNUP',
                payload: data
            })
        })
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}