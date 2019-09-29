const { createStore, combineReducers } = require('redux');
const { showUser } = require('../reducers');

module.exports = createStore(combineReducers({ showUser }), {});
