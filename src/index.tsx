import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components';

import registerServiceWorker from './js/registerServiceWorker';
import setupFontAwesome from './js/setupFontAwesome';

setupFontAwesome();
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
