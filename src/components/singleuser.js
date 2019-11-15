import React from 'react';
import PropTypes from 'prop-types';

const Employee = ({
  name, age, salary, id,
}) => (
  <div>
    <h2>
        hi,
      {' '}
      {name}
    </h2>
    <ul>
      <li>
          your age:
        {' '}
        {age}
      </li>
      <li>
          your salary:
        {' '}
        {salary}
      </li>
      <li>
          your id:
        {' '}
        {id}
      </li>
    </ul>
  </div>
);

Employee.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  salary: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Employee;
