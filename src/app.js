/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import About from './components/About';
import SignupPage from './components/Signup';
import Profile from './components/profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>This is webpack for LMS</h2>
          <nav>
            <ul>
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/signup"> Signup </Link></li>
              <li><Link to="/profile"> Profile </Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
