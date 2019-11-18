/* eslint-disable react/sort-comp */
/* eslint-disable no-alert */
import React from 'react';
import SignupForm from './signupform';

class SignupPage extends React.Component {
  constructor(user) {
    super(user);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: null,
      password: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    fetch('https://codepirates-ah-backend-staging.herokuapp.com/api/v1/users/signup', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(this.state),
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((res1) => {
        console.log(res1);
        this.setState({ message: res1.message });
        this.setState(res1.data);
      });
    event.preventDefault();
  }

  render() {
    const props = {};
    Object.assign(props, this.state, this);
    return (
      <h3>{props.message}</h3>,
        <SignupForm {...props} />
    );
  }
}

export default SignupPage;
