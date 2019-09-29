const { SignupPage, ProfilePage } = require('./actionTypes');

function signupPage(action) {
  return { type: SignupPage, ...action };
}

const profilePage = (firstname, lastname, message) => ({
  ProfilePage, firstname, lastname, message,
});


module.exports = { signupPage, profilePage };
