import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const text = document.getElementById('gdpr_cookie')?.innerHTML

ReactDOM.render(
  <React.StrictMode>
    <App children={text}/>
  </React.StrictMode>,
  document.getElementById('gdpr_cookie')
);

