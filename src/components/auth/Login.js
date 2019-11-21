import React, { useState, useEffect } from "react";
import { Link,  useHistory } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { loginUser } from "../../actions/authActions";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Login = function(){
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  })
  
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
}, [auth, history])

return(
  <Grid container direction="column" justify="center" alignItems="center" spacing={10} >
    <Paper className="login-form" >
      <form noValidate onSubmit={e => {
        e.preventDefault()
        dispatch(loginUser(loginInput))}}>
        <Grid container direction="column" alignItems="center" spacing={3} >
                <Grid item>
                    <TextField label="Email" error={errors.email || errors.emailnotfound? true: false} type="email"
                        onChange={e => setLoginInput({ ...loginInput, email: e.target.value})}/>
                    <Typography style={{color: "red"}}> {errors.email}{errors.emailnotfound}</Typography>
                </Grid>
                <Grid item>
                    <TextField label="Password" error={errors.password || errors.passwordincorrect ? true: false} type="password" 
                       onChange={e => setLoginInput({ ...loginInput, password: e.target.value})}/>
                    <Typography style={{color: "red"}}>{errors.password}{errors.passwordincorrect}</Typography>
                </Grid>
                <Grid item>
                    <Button variant="contained"  type="submit">Login</Button>
                </Grid>
                <Typography variant="subtitle2" component={Link} to="/register">Haven't got a user yet !? Click here to Register</Typography>
            </Grid>
      </form>
    </Paper>
  </Grid>
  );
}

export default Login;