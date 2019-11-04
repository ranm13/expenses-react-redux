import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useDispatch } from 'react-redux'
import { login } from './../../actions/userActions';


function Login(){
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()

        return (
            <Grid container direction="column" justify="center" alignItems="center" spacing={10} >
                <Paper style={{padding: "15px", opacity: "0.95"}}>
                    <Grid container direction="column" alignItems="center" spacing={3}>
                            <Grid item>
                                <TextField label="Username" 
                                    onChange={e => setUserInfo({ ...userInfo, username: e.target.value})}/>
                            </Grid>
                            <Grid item>
                                <TextField label="Password" type="password"
                                     onChange={e => setUserInfo({ ...userInfo, password: e.target.value})}/>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary"
                                   onClick={() => dispatch(login(userInfo))} component={Link} to="/main">Login</Button>
                            </Grid>
                        </Grid>
                    <Typography variant="subtitle2" component={Link} to="/signup">Haven't got a user yet !? Click here to Sign up</Typography>
                </Paper>
            </Grid>
            )
}
export default Login