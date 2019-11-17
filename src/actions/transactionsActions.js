import axios from 'axios'

export const loadTransactions = (userId, month) => dispatch =>{
    axios.get(`http://localhost:4000/transactions/bymonth/${userId}/${month}`)
        .then(({data})=> {
            dispatch({
                type: 'LOAD_TRANSCTIONS',
                payload: data
            })
        })
        .catch(err => console.log(err))
}

export const deleteTransaction = (userId, transactionId) => dispatch =>{
    axios.delete(`http://localhost:4000/transactions//transaction/${userId}/${transactionId}`)
        .then(({data})=> {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: data
            })
        })
        .catch(err => console.log(err))
}

export const pushTransaction = (userId, transaction) => dispatch =>{
  axios.post(`http://localhost:4000/transactions//transaction/${userId}`, transaction)
        .then(({data})=> {
            dispatch({
                type: 'PUSH_TRANSACTION',
                payload: data
            })
        })
        .catch(err => console.log(err))
}