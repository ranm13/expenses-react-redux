import React, {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ActionBar extends Component {
    render() {
        return (
        <Grid container justify="center">
            <Paper>
                <Grid container alignItems="center" spacing={6}>
                    <Grid item>
                        <TextField label="amount" name={"amount"} />
                    </Grid>
                    <Grid item>
                        <TextField label="vendor" name={"vendor"} />
                    </Grid>
                    <Grid item>
                        <TextField label="Category" name={"firstName"} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" >Deposit</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" >Withdraw</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        )
    }
}
export default ActionBar