import axios from 'axios'

export const loadTransactions = (userId, month) => dispatch =>{
    let response = axios.get(`http://localhost:4000/transactions/bymonth/${userId}/${month}`)
        response.then(({data})=> {
            dispatch({
                type: 'LOADTRANSCTIONS',
                payload: data
            })
        })
}

export const deleteTransaction = (userId, transactionId) => dispatch =>{
    let response = axios.delete(`http://localhost:4000/transactions//transaction/${userId}/${transactionId}`)
        response.then(({data})=> {
            dispatch({
                type: 'DELETETRANSACTION',
                payload: data
            })
        })
}

export const pushTransaction = (userId, transaction) => dispatch =>{
    let response = axios.post(`http://localhost:4000/transactions//transaction/${userId}`, transaction)
        response.then(({data})=> {
            dispatch({
                type: 'PUSHTRANSACTION',
                payload: data
            })
        })
}