import React from 'react'
import Logo from './layout/Logo';
import ActionBar from './layout/ActionBar';
import Transactions from './transactions-table/Transactions';
import Grid from '@material-ui/core/Grid';
import ChartsContainer from './analytics/ChartsContainer';
import AppBar from '@material-ui/core/AppBar';
import SideBar from './layout/SideBar';


const Dashboard = function(){
    return (
        <div >
        <AppBar position="relative" style={{color: 'black', backgroundColor: 'white'}}>
            <Logo />
        </AppBar>  
        <Grid container spacing={10} direction='row' >
            <SideBar />
            <Grid item md={9}>
                <Grid container spacing={2} direction='column' >
                    <Grid item>
                        <ActionBar />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1} direction='row' >
                            <Transactions /> 
                            <ChartsContainer /> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>

            
)
}
export default Dashboard