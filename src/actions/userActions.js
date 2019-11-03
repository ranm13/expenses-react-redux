import axios from 'axios'
export const login = (data) => dispatch =>{
    let response =  axios.get(`http://localhost:4000/users/login/${data.username}/${data.password}`)
        response.then(({data})=> {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        })
}