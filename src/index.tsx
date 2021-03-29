import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './animations';
import Main from './Main';
import { Providers } from './Providers';

ReactDOM.render(
  <Providers>
    <Main />
  </Providers>,
  document.getElementById('root'),
);
