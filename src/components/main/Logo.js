import React, {Component} from 'react'
import logo from './logo.png'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class Logo extends Component {
    render() {
        return (
        <Grid container justify="center" alignItems="center" >
            <img src={logo} alt="Bank Hashualim logo" width="150px"></img>
            <Typography variant="h1">
                Bank Hashualim
            </Typography>
        </Grid>)
    }
}
export default Logo