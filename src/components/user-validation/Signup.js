import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useDispatch } from 'react-redux'
import { signup } from './../../actions/userActions';

const Signup = function (){
    const [userInfo, setUserInfo] = useState({
        username: "",
        firstName: "",
        lastName: "",
        balance: 0,
        password: ""
    })

    const dispatch = useDispatch()

        return (
            <Grid container justify="center" alignItems="center">
                <Paper elevation={4} style={{ margin: "25vh", padding: "5vh", width: "50vw", opacity: "0.95" }}>
                    <Grid container justify="center" direction="column" alignItems="center">
                        <Grid item>
                            <Typography variant="h4">Please provide the following</Typography>
                        </Grid>
                        <Grid item >
                            <Grid container spacing={4} justify="center" alignItems="center">
                                <Grid item>
                                    <TextField name="username" label="Username"
                                        onChange={e => setUserInfo({ ...userInfo, username: e.target.value})} />
                                </Grid>
                                <Grid item>
                                    <TextField name="firstName" label="First Name"
                                        onChange={e => setUserInfo({ ...userInfo, firstName: e.target.value})} />
                                </Grid>
                                <Grid item>
                                    <TextField name="lastName" label="Last Name" 
                                        onChange={e => setUserInfo({ ...userInfo, lastName: e.target.value})} />
                                </Grid>
                                <Grid item>
                                    <TextField name="balance" label="Balance" type="number"
                                        onChange={e => setUserInfo({ ...userInfo, balance: e.target.value})} />
                                </Grid>
                                <Grid item>
                                    <TextField name="password" label="Password" type="password"
                                        onChange={e => setUserInfo({ ...userInfo, password: e.target.value})} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" 
                                onClick={() => dispatch(signup(userInfo))}
                                component={Link} to="/main">Signup</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>)
}
export default Signup