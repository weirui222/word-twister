import React, { Component } from 'react';

let index = 0;
let playerScore = 0;
class Player extends Component {
  constructor() {
    super();

    this.state = {
      word: "",
      playerInput:"",
      wordBank: ["Test", "Website", "Number"]
    };
  }

  shuffle(string) {
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
    let word = this.state.wordBank[index];
    let shuffled = this.shuffle(word);
    this.setState({word: shuffled});
  }

  inputChange(e) {
    this.setState({playerInput: e.target.value});
  }

  compareWord(e) {
  	e.preventDefault();
  	console.log('this.state.wordBank[index]',this.state.wordBank[index]);
  	if (this.state.playerInput.toLowerCase() === this.state.wordBank[index].toLowerCase()) {
  		console.log('correct');
  		playerScore++;
  	} else {
  		console.log('wrong');
  	}
  	if (index< this.state.wordBank.length-1) {
  		index++;
  	} else {
  		console.log('Game Over');
  	}
  	
  	this.chooseWord();
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
        <form onSubmit={(e) => this.compareWord(e)}>
          <input type="text"
          			 onChange={e => this.inputChange(e)}
                 value={this.state.playerInput}
                />
          <input type="submit" />
        </form>

        <div>
        	Score: {playerScore}
        </div>
      </div>
    );
  }


}

export default Player;
