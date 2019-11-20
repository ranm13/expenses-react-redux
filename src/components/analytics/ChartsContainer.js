import React from 'react'
import Grid from '@material-ui/core/Grid'
import DepositsPieChart from './DepositsPieChart';
import WithdrawsPieChart from './WithdrawsPieChart';
import { Paper } from '@material-ui/core';

const ChartsContainer = function(){
        return (
            <Grid item >
                <Paper className="charts-container">
                    <Grid container direction='row'>
                        <DepositsPieChart />
                        <WithdrawsPieChart />
                    </Grid>
                </Paper>
            </Grid>)
}
export default ChartsContainer