import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import ToDo from './ToDo'
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <ToDo />, 
  document.getElementById('root')
);


registerServiceWorker();
