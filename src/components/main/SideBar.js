import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';
import { logoutUser } from './../../actions/authActions';


export default function SideBar() {
const userData = useSelector(state => state.userData)
const dispatch = useDispatch()

  return (
    <Grid item style={{height: '85vh'}} md={2}>
        <List>
            <ListItem  key={'name'}>
                <ListItemText primary={'Hello ' + userData.firstName} />
            </ListItem>
            <Divider />
            <ListItem  key={'balance'}>
                <ListItemText primary={'Balance:' + userData.balance} />
            </ListItem>
            <ListItem button key={'logout'}>
                <ListItemText primary={'Logout'}  onClick={() => dispatch(logoutUser())} />
            </ListItem>
        </List>
    </Grid>
  );
}