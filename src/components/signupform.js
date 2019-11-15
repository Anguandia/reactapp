import React from 'react';
import PropTypes from 'prop-types';

const SignupForm = ({
  handleChange, handleSubmit, name, salary, age, id, message,
}) => (
  <div>
    <h2>
      {message}
    </h2>
    <br />
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
          name:
        <input type="text" name="name" defaultValue={name} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="salary">
          salary:
        <input type="text" name="salary" defaultValue={salary} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="age">
          age:
        <input type="text" name="age" defaultValue={age} onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="id">
          id:
        <input type="text" name="id" defaultValue={id} onChange={handleChange} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default SignupForm;
