import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch} from 'react-redux'
import { pushTransaction } from '../../actions/transactionsActions';

const ActionBar = function(){
    const [transactionInput, setTransactionInput] = useState({
        amount: "",
        vendor: "",
        category: ""
    })
    
    const userId = useSelector(state => state.auth.user.id)
    const dispatch = useDispatch()

    return (
        <Grid container justify="center">
            <Paper style={{padding: "15px", backgroundColor: "silver", marginTop: '15px'}}>
                <Grid container alignItems="center" spacing={6}>
                    <Grid item>
                        <TextField label="Amount" name={"amount"} 
                         onChange={e => setTransactionInput({ ...transactionInput, amount: e.target.value})}/>
                    </Grid>
                    <Grid item>
                        <TextField label="Vendor" name={"vendor"} 
                          onChange={e => setTransactionInput({ ...transactionInput, vendor: e.target.value})}/>
                    </Grid>
                    <Grid item>
                        <TextField label="Category" name={"category"} 
                          onChange={e => setTransactionInput({ ...transactionInput, category: e.target.value})}/>
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