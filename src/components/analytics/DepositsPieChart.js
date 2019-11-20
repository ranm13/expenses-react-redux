import React from 'react'
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
    const COLORS = [`#6D6A75`, `#3C362A`, `#663F46`, '#313E50', '#788585'];
    const transactions = useSelector(state => state.transactions)
    let deposits = countDepositByCategory(transactions)
    return (
      <Grid item >
        <Typography variant="h5">
          This Month Deposits
        </Typography>
        <PieChart width={400} height={520} >
          <Pie
            data={deposits}
            dataKey="value"
            label
            fill="#8884d8"
            outerRadius={150}>
            {deposits.map(d => <Cell key={`cell-${deposits.indexOf(d)}`} fill={COLORS[deposits.indexOf(d)]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </Grid>    
      );
}
export default DepositsPieChart