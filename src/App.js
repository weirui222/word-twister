import React, { Component } from 'react';
import './App.css';
import Player from './Player';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div>
        	<header></header>
          <Player />
          <footer>
          	<p ><a className='info' href='https://github.com/Crateros/donnie-congcong-wordgame'>Created by CongCong Li &#38; Donnie Ellstrom</a></p>
          </footer>
        </div>
      </div>
    );
  }
  }
  export default App;
