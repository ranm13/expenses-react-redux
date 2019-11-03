import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            balance: 0,
            password: ""
        }
    }

    inputHandler = (e) => {
        let newValue = e.target.value
        let toChange = e.target.name
        this.setState({
            [toChange]: newValue
        })
    }

    signupOnClick = async () => {
        let userData = this.state
        let response = await axios.post('http://localhost:4000/users/signup', userData)
        console.log(response)
    }

    render() {
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
                                        onChange={this.inputHandler} />
                                </Grid>
                                <Grid item>
                                    <TextField name="firstName" label="First Name"
                                        onChange={this.inputHandler} />
                                </Grid>
                                <Grid item>
                                    <TextField name="lastName" label="Last Name" 
                                        onChange={this.inputHandler} />
                                </Grid>
                                <Grid item>
                                    <TextField name="balance" label="Balance" type="number"
                                        onChange={this.inputHandler} />
                                </Grid>
                                <Grid item>
                                    <TextField name="password" label="Password" type="password"
                                        onChange={this.inputHandler} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" 
                                onClick={this.signupOnClick}>Signup</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>)
    }
}
export default Signup