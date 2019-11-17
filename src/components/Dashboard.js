import React from 'react'
import Logo from './main/Logo';
import { useSelector } from 'react-redux'
import ActionBar from './main/ActionBar';
import Transactions from './transactions-table/Transactions';
import Grid from '@material-ui/core/Grid';
import ChartsContainer from './analytics/ChartsContainer';
import AppBar from '@material-ui/core/AppBar';
import SideBar from './main/SideBar';


const Dashboard = function(){
    const userData = useSelector(state => state.userData)
    return (
        <div>
        <AppBar position="relative" style={{color: 'black', backgroundColor: 'white'}}>
            <Logo />
        </AppBar>  
        <Grid container spacing={10} direction='row' >
            <SideBar />
            <Grid item md={9}>
                <Grid container spacing={10} direction='column' >
                    <Grid item>
                        <ActionBar />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={10} direction='row' >
                            {userData._id? <Transactions /> : null}
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