import React from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser, loadBalance } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp > currentTime) {
    // Validate that the toke has not expired
    store.dispatch(setCurrentUser(decoded));
    store.dispatch(loadBalance(decoded.id));
  } else {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

const App = function() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
