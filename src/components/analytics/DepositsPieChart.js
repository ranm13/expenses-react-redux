import React from 'react'
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core';

const countDepositByCategory = function(transactions){
    let counter = {}
    let categorizedDeposits = []
    let deposits = transactions.filter(t => t.type === 'deposit')
    for(let deposit of deposits){
        counter[deposit.category]? 
            counter[deposit.category] += deposit.amount :
            counter[deposit.category] = deposit.amount
    }
    for(let key in counter){
        categorizedDeposits.push({name: key, value: counter[key]})
    }

    return categorizedDeposits
}

const DepositsPieChart = function() {
    const COLORS = [`#795548`, `#34495e`, `#95a5a6`];
    const transactions = useSelector(state => state.transactions)
    let deposits = countDepositByCategory(transactions)
    return (
      <Grid item >
        This Month Deposits
            <PieChart   width={300} height={300}>
              <Pie
                data={deposits}
                dataKey="value"
                label
                fill="#8884d8"
                outerRadius={90}>
                {deposits.map(d => <Cell key={`cell-${deposits.indexOf(d)}`} fill={COLORS[deposits.indexOf(d)]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
        </Grid>    
      );
}
export default DepositsPieChart