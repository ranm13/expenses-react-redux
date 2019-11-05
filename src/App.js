import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Layout from './components/Layout';
import Signup from './components/user-validation/Signup';
import Login from './components/user-validation/Login';

const App = function(){
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        {isLoggedIn? 
          <Route exact path="/main" component={Layout}/> :
          <Redirect to="/" />
          }
      </div>
    </Router>
  );
}

export default App;
