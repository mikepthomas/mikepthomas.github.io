import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './js/registerServiceWorker';
import setupFontAwesome from './js/setupFontAwesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

setupFontAwesome();
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
