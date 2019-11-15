/* eslint-disable react/sort-comp */
/* eslint-disable no-alert */
import React from 'react';
import SignupForm from './signupform';

class SignupPage extends React.Component {
  constructor(user) {
    super(user);
    this.state = {
      name: '',
      salary: '',
      id: '',
      age: '',
      message: '',
      component: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    const {
      name, id, salary, age,
    } = this.state;
    fetch('http://dummy.restapiexample.com/api/v1/create', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name, id, salary, age,
      }),
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((res1) => {
        const message = res1.name
          ? `Hi, ${res1.name}, you id is ${res1.id}. to get your profile, click get profile`
          : res1;
        this.setState({ message });
        this.setState({ component: 'profile' });
      });
    event.preventDefault();
  }

  render() {
    const props = {};
    Object.assign(props, this.state, this);
    return (
      <h3>{props.message}</h3>,
      // eslint-disable-next-line react/jsx-props-no-spreading
        <SignupForm {...props} />
    );
  }
}

export default SignupPage;
