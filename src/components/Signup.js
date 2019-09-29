/* eslint-disable react/sort-comp */
/* eslint-disable no-alert */
import React from 'react';
import SignupForm from './signupform';

const qstring = (ob) => Object.keys(ob).map((key) => `${key}=${ob[key]}`).join('&');
class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      email: '',
      lastname: '',
      password: '',
      username: '',
      error: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  setError = (error) => {
    this.setState({ error });
  }

  handleSubmit = (event) => {
    const {
      firstname, lastname, email, password, username, error, message,
    } = this.state;
    fetch('http://localhost:3000/api/v1/users/signup', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        firstname, lastname, email, password, username, error, message,
      }),
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((res1) => {
        this.setError(res1.data ? '' : res1.message);
        localStorage.setItem('message', res1.message);
        return res1.data;
      })
      .then((res) => {
        if (res) {
          res.message = localStorage.getItem('message');
          console.log('rrr', res);
          localStorage.setItem('state', res);
          document.location.href = `/profile?${qstring(res)}`;
        }
      });
    event.preventDefault();
  }

  render() {
    const {
      firstname, lastname, email, error,
    } = this.state;
    const employee = {
      firstname, lastname, email, error,
    };
    return (
      <SignupForm employee={employee} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={error} />
    );
  }
}

export default SignupPage;
