/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import About from './components/About';
import SignupPage from './components/Signup';
import Articles from './components/articles';
import Article from './components/article';
import store from './redux/store';
import styles from './components/styles';

import './components/styles.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h2 style={styles.pageTitle}>This is webpack for LMS</h2>
            <nav style={styles.nav}>
              <ul>
                <li style={styles.navLink}><Link to="/about"> About </Link></li>
                <li style={styles.navLink}><Link to="/signup"> Signup </Link></li>
                <li style={styles.navLink}><Link to="/articles"> Articles </Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/signup" component={SignupPage} />
              <Route exact path="/articles" component={Articles} />
              <Route path="/articles/:slug" component={Article} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
