import React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const TransactionsHeaders = function (){
    return (
        <TableHead>
            <TableRow>
                <TableCell className="headers-item">Amount</TableCell>
                <TableCell className="headers-item">Vendor</TableCell>
                <TableCell className="headers-item">Date</TableCell>
            </TableRow>
        </TableHead>)
}
export default TransactionsHeaders