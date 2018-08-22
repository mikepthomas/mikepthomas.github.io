import * as React from 'react';

import Navigation from './components/Navigation';
import logo from './logo.svg';

import './App.css';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
