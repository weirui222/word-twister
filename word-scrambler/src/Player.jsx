import React, { Component } from 'react';
import './Player.css';

const wordbank =["thundering", "javascript", "immutable", "variable", "vulgar", "serialize", "vagabond", "imminent", "shish kabob", "scold", "deserve", "apologise", "person", "elitist", "measure", "parallel", "examine", "mindful", "electric", "nefarious", "bitter", "treasure", "elongate", "judgement", "lacking", "excessive", "satisfy", "apartment", "superfluous", "steel", "chickens", "fairies", "delight", "education", "berserker", "triangulate", "crooked","abandoned", "profit", "erratic", "semantics", "maniacal", "breathe", "sticker", "unused", "grotesque", "challenger", "mysterious", "suffer", "semi-permeable", "horrible", "outrageous", "arithmetic", "derivative", "rhythm", "trivial", "succulent", "tranquil", "hallmark", "humongous", "concentrate", 'website', 'virtual', 'version', 'utility', 'toolbar',
'storage', 'spyware', 'spammer', 'scanner', 'runtime', 'restore',
'program', 'process', 'privacy', 'printer', 'podcast', 'offline',
'network', 'monitor', 'malware', 'lurking', 'keyword', 'integer',
'exabyte', 'encrypt', 'dynamic', 'digital', 'desktop', 'compile',
'command', 'captcha', 'browser']


class Player extends Component {
  constructor() {
    super();

    this.state = {
      word: "",
      playerInput:"",
      wordBank: this.pickWords(),
      gameOver:false,
      index: 0,
			playerScore: 0,
			hintNum: 0
    };
  }

  pickWords() {
  	let arr=[];
  	for (var i = 0; i < 10; i++) {
  		let j = Math.floor(Math.random() * wordbank.length);
  		arr.push(wordbank[j]);
  	}
  	return arr;
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
    let word = this.state.wordBank[this.state.index];
    let shuffled = this.shuffle(word);
    this.setState({word: shuffled});
  }

  inputChange(e) {
    this.setState({playerInput: e.target.value});
  }

  compareWord(e) {
  	e.preventDefault();
  	if (this.state.gameOver) {
  		return;
  	}
  	this.setState({hintNum:0});
  	console.log('this.state.wordBank[this.state.index]',this.state.wordBank[this.state.index]);
  	if (this.state.playerInput.toLowerCase() === this.state.wordBank[this.state.index].toLowerCase()) {
  		console.log('correct');
  		this.setState({playerScore: this.state.playerScore+1});
  	} else {
  		console.log('wrong');
  	}
  	if (this.state.index< this.state.wordBank.length-1) {
  		this.setState({
  			index: this.state.index+1,
  			word: this.shuffle(this.state.wordBank[this.state.index+1]),
        playerInput: ""
  		});
  	} else {
  		this.setState({gameOver:true});
  		console.log('Game Over');
  	}


  }

  hintWord() {

  	if (this.state.hintNum < this.state.wordBank[this.state.index].length) {
  		this.setState({
  			hintNum:this.state.hintNum+1,
  			playerInput: this.state.wordBank[this.state.index].substr(0,this.state.hintNum+1)
  		});
  	}

  }

  restart() {
  	let words = this.pickWords()

  	this.setState({
  		word: this.shuffle(words[0]),
      playerInput:"",
      wordBank: words,
      gameOver:false,
      index: 0,
			playerScore: 0,
			hintNum: 0
  	});
  }

  componentDidMount() {
    this.chooseWord();
    console.log(this.state.word);
  }

  render() {
    return (
      <div className="playerContainer">
        <div className="row">
          <div className="col-xs-12">
            <div className="titleContainer">
              <h2 className="gameTitle">-Word Twister-</h2>
              <hr className="titleHR"/>
            </div>
            <div>
              <h1><span className="playerPrompt">Untwist: </span><span className="scrambledWord">{this.state.word}</span></h1>
              <button className="btn btn-default hintBtn" onClick={(e) => this.hintWord()}>Hint!</button>
            </div>
            <form className="submitForm" onSubmit={(e) => this.compareWord(e)}>
              <input placeholder="Enter the correct word" className="inputField" type="text"
              			 onChange={e => this.inputChange(e)}
                     value={this.state.playerInput}
                  />
                  <hr className="inputHR" />
                  <button type="submit" className="btn btn-default submitBtn">Submit</button>
                  <button className='btn btn-primary restartBtn' onClick={(e) => this.restart()}>Restart</button>
            </form>
            <div>
            	Score: {this.state.playerScore}
            </div>
            <div>
          	  {this.state.gameOver ? 'Game Over':''}
            </div>
        </div>
        </div>
      </div>
    );
  }

}

export default Player;
