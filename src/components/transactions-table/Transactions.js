import React, { useEffect } from 'react'
import TransactionsHeaders from './TransactionsHeaders';
import Transaction from './Transaction';
import { useSelector, useDispatch} from 'react-redux'
import { loadTransactions } from './../../actions/transactionsActions';

const Transactions = function(){
    const transactions = useSelector(state => state.transactions)
    const userId = useSelector(state => state.userData._id)
    const dispatch = useDispatch()

    useEffect(() => {
        let month = (new Date()).getMonth()
        dispatch(loadTransactions(userId, month))
      }, [])
    return (
        <div>
            <TransactionsHeaders />
            {transactions[0]? 
                transactions.map(t => <Transaction key={t._id} transaction={t}/>):
                null
                }
        </div>)
}
export default Transactions