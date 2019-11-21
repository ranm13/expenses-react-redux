import React from 'react'
import Grid from '@material-ui/core/Grid'
import DepositsPieChart from './DepositsPieChart';
import WithdrawsPieChart from './WithdrawsPieChart';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner'

const ChartsContainer = function(){
    const transactions = useSelector(state => state.transactions)
    return (
        <Grid item >
            <Paper className="charts-container">
                {
                    transactions[0]?
                        <Grid container direction='row'>
                            <DepositsPieChart />
                            <WithdrawsPieChart />
                        </Grid>:
                        <Loader
                        className="spinner2"
                        type="Puff"
                        color="#E4061F"
                        height={100}
                        width={100}
                        timeout={4000} 
                        />
                }

            </Paper>
        </Grid>)
}
export default ChartsContainer