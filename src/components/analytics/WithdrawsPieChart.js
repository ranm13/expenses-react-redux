import React from 'react'
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core';

const countWithdrawsByCategory = function(transactions){
    let counter = {}
    let categorizedWithdraws = []
    let withdraws = transactions.filter(t => t.type === 'withdraw')
    for(let withdraw of withdraws){
        counter[withdraw.category]? 
            counter[withdraw.category] += withdraw.amount :
            counter[withdraw.category] = withdraw.amount
    }
    for(let key in counter){
        categorizedWithdraws.push({name: key, value: counter[key]})
    }

    return categorizedWithdraws
}

const WithdrawsPieChart = function() {
    const COLORS = [`#795548`, `#34495e`, `#95a5a6`];
    const transactions = useSelector(state => state.transactions)
    let withdraws = countWithdrawsByCategory(transactions)
    return (
      <Grid item>
        This Month Withdraws
            <PieChart   width={300} height={300}>
              <Pie
                data={withdraws}
                dataKey="value"
                label
                fill="#8884d8"
                outerRadius={90}>
                {withdraws.map(d => <Cell key={`cell-${withdraws.indexOf(d)}`} fill={COLORS[withdraws.indexOf(d)]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
        </Grid>    
      );
}
export default WithdrawsPieChart