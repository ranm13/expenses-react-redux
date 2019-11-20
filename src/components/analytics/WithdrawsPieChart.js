import React from 'react'
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
    const COLORS = [`#6D6A75`, `#3C362A`, `#663F46`, '#313E50', '#788585'];
    const transactions = useSelector(state => state.transactions)
    let withdraws = countWithdrawsByCategory(transactions)
    return (
      <Grid item style={{marginLeft: '5vw'}}>
        <Typography variant="h5">
          This Month Withdraws
        </Typography>
        <PieChart width={400} height={520} >
          <Pie
            data={withdraws}
            dataKey="value"
            label
            fill="#8884d8"
            outerRadius={150}>
            {withdraws.map(d => <Cell key={`cell-${withdraws.indexOf(d)}`} fill={COLORS[withdraws.indexOf(d)]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </Grid>    
    );
}
export default WithdrawsPieChart