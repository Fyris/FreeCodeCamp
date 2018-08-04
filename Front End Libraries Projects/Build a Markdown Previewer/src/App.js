import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './imports/Header.js';
import Body from './imports/Body.js';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "100%"}}>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
