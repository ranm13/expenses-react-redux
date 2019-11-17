import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import moment from 'moment'
import { useSelector, useDispatch} from 'react-redux'
import { deleteTransaction } from './../../actions/transactionsActions';

const getIconByTransactionType = function(transactionType){
        switch(transactionType){
            case("withdraw"):
                return  <FaArrowDown style={{color: "red"}}/>
            case("deposit"):
                return  <FaArrowUp style={{color: "green"}}/>
        }
    }

const Transaction = function(props) {
    let transaction = props.transaction
    const userId = useSelector(state => state.userData._id)
    const dispatch = useDispatch()
    return (
        <TableRow >
            <TableCell className="transaction-item">{getIconByTransactionType(transaction.type)}{transaction.amount}</TableCell>
            <TableCell className="transaction-item">{transaction.vendor}</TableCell>
            <TableCell className="transaction-item">{moment(transaction.date).format('LLLL')}</TableCell>
            <TableCell className="transaction-item"
                onClick={() => dispatch(deleteTransaction(userId, transaction._id))}>X</TableCell>
        </TableRow >)
}

export default Transaction