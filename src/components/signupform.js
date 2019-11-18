import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const SignupForm = ({ handleChange, handleSubmit, message }) => (
  <div style={styles.body}>
    <h3>{message}</h3>
    <form onSubmit={handleSubmit} style={styles.form}>
      <label htmlFor="firstname" style={styles.input}>
        Firstname:
        <br />
        <input type="text" name="firstname" onChange={(e) => handleChange(e)} style={styles.input} />
      </label>
      <br />
      <label htmlFor="lastname" style={styles.input}>
        Lastname:
        <br />
        <input type="text" name="lastname" onChange={(e) => handleChange(e)} style={styles.input} />
      </label>
      <br />
      <label htmlFor="username" style={styles.input}>
        Username:
        <br />
        <input type="text" name="username" onChange={(e) => handleChange(e)} style={styles.input} />
      </label>
      <br />
      <label htmlFor="email" style={styles.input}>
        Email:
        <br />
        <input type="email" name="email" onChange={(e) => handleChange(e)} style={styles.input} />
      </label>
      <br />
      <label htmlFor="password" style={styles.input}>
        Password:
        <br />
        <input type="password" name="password" onChange={(e) => handleChange(e)} style={styles.input} />
      </label>
      <br />
      <input type="submit" value="Submit" style={styles.submit} />
    </form>
  </div>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default SignupForm;
