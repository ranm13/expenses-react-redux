import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    top: 150,
    zIndex: 0,
    backgroundColor: "#E4061F",
    color: "white"
  }
}));

export default function SideBar() {
  const userData = useSelector(state => state.auth.user);
  const balance = useSelector(state => state.balance);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          <ListItem key={"name"}>
            <ListItemText primary={"Hello " + userData.name} />
          </ListItem>
          <Divider style={{ backgroundColor: "white" }} />
          <ListItem key={"balance"}>
            <ListItemText primary={"Balance: " + balance} />
          </ListItem>
          <ListItem button key={"logout"}>
            <ListItemText
              primary={"Logout"}
              onClick={() => dispatch(logoutUser())}
            />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
