import React, { useState, useEffect } from "react";
import { Link,  useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { registerUser } from "../../actions/authActions";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Register = function(){
  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    balance: 0,
    password: "",
    password2: ""
  })

  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
}, [auth, history])

return (
  <Grid container justify="center" alignItems="center">
    <Paper className="register-form">
      <form noValidate onSubmit={e => {
      e.preventDefault()
      dispatch(registerUser(registerInput, history))}}>
        <Grid container justify="center" direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h4">Please provide the following</Typography>
            </Grid>
            <Grid item >
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item>
                        <TextField label="Name" type="string" error={errors.name ? true: false}
                            onChange={e => setRegisterInput({ ...registerInput, name: e.target.value})} />
                        <Typography style={{color: "red"}}> {errors.name}</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Email" type="email" error={errors.email ? true: false}
                            onChange={e => setRegisterInput({ ...registerInput, email: e.target.value})} />
                        <Typography style={{color: "red"}}> {errors.email}</Typography>
                    </Grid>
                    <Grid item>
                        <TextField  label="Balance" type="number" error={errors.balance ? true: false}
                            onChange={e => setRegisterInput({ ...registerInput, balance: e.target.value})} />
                        <Typography style={{color: "red"}}> {errors.balance}</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Password" type="password" error={errors.password ? true: false}
                            onChange={e => setRegisterInput({ ...registerInput, password: e.target.value})} />
                        <Typography style={{color: "red"}}> {errors.password}</Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Confirm Password" type="password" error={errors.password2 ? true: false}
                            onChange={e => setRegisterInput({ ...registerInput, password2: e.target.value})} />
                        <Typography style={{color: "red"}}> {errors.password2}</Typography>
                    </Grid>
                </Grid>
            </Grid>
          <Grid item style={{marginTop: "15px"}}>
            <Button variant="contained" type="submit" >Sign up</Button>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" component={Link} to="/">Already have an account? Log in</Typography>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </Grid>
  );
}

export default Register;

// <p>
// Already have an account? <Link to="/login">Log in</Link>
// </p>