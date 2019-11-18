import React from 'react'
import Grid from '@material-ui/core/Grid'
import DepositsPieChart from './DepositsPieChart';
import WithdrawsPieChart from './WithdrawsPieChart';
import { Paper } from '@material-ui/core';

const ChartsContainer = function(){
        return (
            <Grid item >
                <Paper style={{padding: "15px", width:'40vw'}}>
                    <Grid container direction='row' spacing={2}>
                        <DepositsPieChart />
                        <WithdrawsPieChart />
                    </Grid>
                </Paper>
            </Grid>)
}
export default ChartsContainer