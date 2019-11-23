import axios from 'axios'

export const loadTransactions = (userId, month, year) => dispatch =>{
    axios.get(`/transactions/bymonth/${userId}/${month}/${year}`)
        .then(({data})=> {
            dispatch({
                type: 'LOAD_TRANSCTIONS',
                payload: data
            })
        })
        .catch(err => console.log(err))
}

export const deleteTransaction = (userId, transactionId) => dispatch =>{
    axios.delete(`/transactions//transaction/${userId}/${transactionId}`)
        .then(({data})=> {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: data
            })
        })
        .catch(err => console.log(err))
}

export const pushTransaction = (userId, transaction) => dispatch =>{
  axios.post(`/transactions//transaction/${userId}`, transaction)
        .then(({data})=> {
            dispatch({
                type: 'PUSH_TRANSACTION',
                payload: data
            })
        })
        .catch(err =>
            dispatch({
              type: ('GET_ERRORS'),
              payload: err.response.data
            })
        )
}