import React from 'react';

const props = (prop) => new URLSearchParams(window.location.search).get(prop);
const Profile = () => (
  <div>
    <h2>
            hi,
      {' '}
      {props('firstname')}
      {' '}
      {props('lastname')}
    </h2>
    <p>{props('message')}</p>
  </div>
);

export default Profile;
