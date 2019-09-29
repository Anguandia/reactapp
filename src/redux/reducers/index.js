const { SignupPage } = require('../actions/actionTypes');

const initialState = {
  firstname: 'empty',
  lastname: 'empty',
  message: 'empty',
};

const showUser = function showUser(state = initialState, action) {
  switch (action.type) {
    case SignupPage:
      return ({ ...state, ...action });
    default:
      return state;
  }
};

module.exports = { initialState, showUser };
