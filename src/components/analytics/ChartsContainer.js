import React from 'react'
import Grid from '@material-ui/core/Grid'
import DepositsPieChart from './DepositsPieChart';
import WithdrawsPieChart from './WithdrawsPieChart';

const ChartsContainer = function(){
        return (
            <Grid item >
                <Grid container direction='row' spacing={6}>
                    <DepositsPieChart />
                    <WithdrawsPieChart />
                </Grid>
            </Grid>)
}
export default ChartsContainer