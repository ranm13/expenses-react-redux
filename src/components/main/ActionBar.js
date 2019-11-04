import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ActionBar(){
    return (
        <Grid container justify="center">
            <Paper>
                <Grid container alignItems="center" spacing={6}>
                    <Grid item>
                        <TextField label="Amount" name={"amount"} />
                    </Grid>
                    <Grid item>
                        <TextField label="Vendor" name={"vendor"} />
                    </Grid>
                    <Grid item>
                        <TextField label="Category" name={"firstName"} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" style={{padding: "15px"}}>Deposit</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" style={{padding: "15px"}} >Withdraw</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        )
}
export default ActionBar