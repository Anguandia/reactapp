import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ name }) => (
  <div>
    <h3>
      {' '}
      {name}
    </h3>
  </div>
);

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
