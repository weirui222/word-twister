import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Modal from 'react-modal';

class App extends Component {

constructor() {
  super();

    this.state = { modalIsOpen: false };
  }

  openModal() {
    console.log("Modal is open!");
    this.setState({modalIsOpen: true});
  }


    render() {
      return (
        <div className="App">
          <div>
            <Player />
          </div>

        <div>
          <button onClick={() => this.openModal()}>Open Modal</button>
        <Modal
           isOpen={this.state.modalIsOpen}
            contentLabel="Example Modal">

          <div><p>I am a modal here me roar</p></div>
        </Modal>
      </div>


        </div>
      );
    }
  }
  export default App;
