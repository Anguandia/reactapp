/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignupPage from './components/Signup';
import Profile from './components/profile';
import User from './components/getemployee';
import SingleUser from './components/singleuser';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav>
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/contact"> Contact </Link></li>
              <li><Link to="/signup"> Signup </Link></li>
              <li><Link to="/user"> User </Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} name="mike" />} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/profile" render={(props) => <Profile {...props} name={props.name} />} />
            <Route path="/user" render={(props) => <User {...props} name={props.name} />} />
            <Route path="/singleuser" component={SingleUser} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
