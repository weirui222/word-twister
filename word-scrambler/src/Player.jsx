import React, { Component } from 'react';

class Player extends Component {
  constructor() {
    super();

    this.state = {
      word: "",
      wordBank: ["Test", "Website", "Number"]
    };
  }

  shuffle(string) {
    //  let j, x, i;
    //  for (i = a.length; i; i--) {
    //      j = Math.floor(Math.random() * i);
    //      x = a[i - 1];
    //      a[i - 1] = a[j];
    //      a[j] = x;
    //  }
    let a = string.split("");
    let n = a.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
  }

  chooseWord() {
    //Must use variable assignment to assign this.state, also CALL FUNCTION
    let word = this.state.wordBank[0];
    let shuffled = this.shuffle(word);
    this.setState({word: shuffled});
  }

  componentDidMount() {
    this.chooseWord();
    console.log(this.state.word);
  }

  render() {
    return (
      <div className="playerContainer">
        <div>
          <h2>Welcome to Word Scramble</h2>
        </div>
        <div>
          <h1>Scrambled Word Goes Here {this.state.word}</h1>
        </div>
      </div>
    );
  }


}

export default Player;
