import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import ToDo from './ToDo'

ReactDOM.render(
  <div>
    <App name="Bobur" />
    <Clock />
    <ToDo />
  </div>, 
  document.getElementById('root')
);
