import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';

// import 'bootstrap/dist/css/bootstrap.css';
// git stat

function main() {
  ReactDOM.render(
    <Home />
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
