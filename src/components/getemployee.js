/* eslint-disable react/sort-comp */
/* eslint-disable no-alert */
import React from 'react';

const qstring = (ob) => Object.keys(ob).map((key) => `${key}=${ob[key]}`).join('&');
class SignupPage extends React.Component {
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    handleSubmit = () => {
      fetch('http://dummy.restapiexample.com/api/v1/employee/64425', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })
        .then((response) => response.json())
        .then((res) => {
          console.log('xxxx', res);
          document.location.href = `/singleuser?${qstring(res)}`;
        });
    }

    render() {
      this.handleSubmit();
      return (
        <p> testing </p>
      );
    }
}

export default SignupPage;
