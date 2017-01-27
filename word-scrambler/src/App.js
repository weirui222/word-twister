import React, { Component } from 'react';
import './App.css';
import Player from './Player';

class App extends Component {

    render() {
      return (
        <div className="App">
          <div>
            <Player />
          </div>
        </div>
      );
    }
  }
  export default App;
