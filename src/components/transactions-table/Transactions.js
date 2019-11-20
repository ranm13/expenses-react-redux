import React, { useEffect } from 'react'
import TransactionsHeaders from './TransactionsHeaders';
import Transaction from './Transaction';
import { useSelector, useDispatch} from 'react-redux'
import { loadTransactions } from './../../actions/transactionsActions';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { Paper } from '@material-ui/core';
import Loader from 'react-loader-spinner'


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
        <Paper className="table-container">
          <Table size="small">
            <TransactionsHeaders />
            <TableBody>
              {transactions[0]? 
                transactions
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map(t => <Transaction key={t._id} transaction={t}/>):
                  <Loader
                  type="Puff"
                  color="#E4061F"
                  height={100}
                  width={100}
                  timeout={4000} 
                   />
                }
            </TableBody>
          </Table >
        </Paper> 
      </Grid>)
}
export default Transactions