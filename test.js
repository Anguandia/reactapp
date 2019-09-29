const store = require('./src/redux/store');

const { signupPage } = require('./src/redux/actions');

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(signupPage({
  firstname: 'mike',
  lastname: 'kuku',
  message: '',
}));

store.dispatch(signupPage({
  firstname: 'mik;lpe',
  lastname: 'kukupk',
  message: 'kljhgy',
}));

unsubscribe();
