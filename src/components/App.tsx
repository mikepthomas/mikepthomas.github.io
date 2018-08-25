import * as React from 'react';
import {
  Intro,
  Navigation
} from '.';

import './App.css';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navigation />
        <Intro />
      </div>
    );
  }
}
