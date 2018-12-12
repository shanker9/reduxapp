import React, { Component } from 'react';
import './App.css';
import BlotterContainer from './Blotter/BlotterContainer';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BlotterContainer/>
        </header>
      </div>
    );
  }
}

export default App;
