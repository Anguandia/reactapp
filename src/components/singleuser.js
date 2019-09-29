import React from 'react';

const props = (prop) => new URLSearchParams(window.location.search).get(prop);
console.log('ooo', props('employee_name'));
const SingleUser = () => (
  <div>
    <h2>
            hi,
      {' '}
      {props('employee_name')}
    </h2>
  </div>
);

export default SingleUser;
