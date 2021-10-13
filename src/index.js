import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// context 
import {GlobalProvider} from '../src/context/context';

ReactDOM.render(
  <GlobalProvider>
      <App />
  </GlobalProvider>
,
  document.getElementById('root')
);

