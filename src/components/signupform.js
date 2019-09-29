import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = ({
  handleChange, handleSubmit, firstname, lastname, email, password, username, error, message,
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="firstname">
                firstname:
      <input type="text" name="firstname" firstname={firstname} onChange={handleChange} />
    </label>
    <label htmlFor="lastname">
                lastname:
      <input type="text" name="lastname" lastname={lastname} onChange={handleChange} />
    </label>
    <label htmlFor="email">
                email:
      <input type="text" name="email" email={email} onChange={handleChange} />
    </label>
    <label htmlFor="password">
                password:
      <input type="text" name="password" password={password} onChange={handleChange} />
    </label>
    <label htmlFor="username">
                username:
      <input type="text" name="username" username={username} onChange={handleChange} />
    </label>
    <p>
      {error}
    </p>
    <p>
      {message}
    </p>
    <input type="submit" value="Submit" />

  </form>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default SignupForm;
