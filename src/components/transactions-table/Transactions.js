import React, { useEffect } from 'react'
import TransactionsHeaders from './TransactionsHeaders';
import Transaction from './Transaction';
import { useSelector, useDispatch} from 'react-redux'
import { loadTransactions } from './../../actions/transactionsActions';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';


const Transactions = function(){
    const transactions = useSelector(state => state.transactions)
    const userId = useSelector(state => state.auth.user.id)
    const dispatch = useDispatch()

    useEffect(() => {
        let month = (new Date()).getMonth()
        dispatch(loadTransactions(userId, month))
      }, [dispatch ,userId])
    return (
      <Grid item >
        <Table size="small">
          <TransactionsHeaders />
          <TableBody>
            {transactions[0]? 
              transactions
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map(t => <Transaction key={t._id} transaction={t}/>):
              null
              }
          </TableBody>
        </Table >
      </Grid>)
}
export default Transactions