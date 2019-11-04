import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Layout from './components/Layout';
import Signup from './components/user-validation/Signup';
import Login from './components/user-validation/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/main" component={Layout}/>
      </div>
    </Router>
  );
}

export default App;
