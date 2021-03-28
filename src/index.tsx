import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animations';
import Main from './Main';
import { Providers } from './Providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Main />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
