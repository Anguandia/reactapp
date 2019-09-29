import React from 'react';
import { render } from 'react-dom';
import App from './app';

const out = App.prototype ? <App /> : <h6>Welcome to Authors Haven</h6>;
render(out, document.getElementById('root'));
