import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch} from 'react-redux'
import { pushTransaction } from '../../actions/transactionsActions';


const ActionBar = function(){
    const [transactionInput, setTransactionInput] = useState({
        amount: 0,
        vendor: "",
        category: ""
    })
    
    const userId = useSelector(state => state.auth.user.id)
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch()

    return (
        <Grid container >
            <Paper style={{padding: "15px",marginLeft: '1.5vw', marginTop: '15px', width:'85vw'}}>
                <Grid container  direction="row" justify="center" alignItems="center" spacing={10}>
                    <Grid item>
                        <TextField label="Amount" type="number" error={errors.amount ? true: false}
                         onChange={e => setTransactionInput({ ...transactionInput, amount: e.target.value})}/>
                         <Typography style={{color: "red"}}> {errors.amount}</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Vendor" error={errors.vendor ? true: false}
                          onChange={e => setTransactionInput({ ...transactionInput, vendor: e.target.value})}/>
                          <Typography style={{color: "red"}}> {errors.vendor}</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Category" error={errors.category ? true: false}
                          onChange={e => setTransactionInput({ ...transactionInput, category: e.target.value})}/>
                          <Typography style={{color: "red"}}> {errors.category}</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" style={{padding: "15px", backgroundColor: "green", color: 'white'}}
                         onClick={() => dispatch(pushTransaction(userId, {...transactionInput, type: 'deposit'}))} >Deposit</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" style={{padding: "15px" , backgroundColor: "red" , color: 'white'}}
                        onClick={() => dispatch(pushTransaction(userId, {...transactionInput, type: 'withdraw'}))}>Withdraw</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        )
}
export default ActionBar