import React, { Component } from 'react';
import { questions } from './questions.json';
import './App.css';
import right from './right.mp3';
import wrong from './wrong.mp3';

function score(){
  let score = document.getElementById("score")
  score.innerHTML = parseInt(score.innerHTML) + 1000000
}

class T extends Component {
  constructor(props){
    super(props)


  }

  render(){
   return( <h4 onClick={()=> this.clicked()}>{this.props.question.content[this.props.choice]}</h4>)
  }
  clicked() {
    console.log(this.props)
    var audio;
    if (this.props.question.correct === this.props.choice){
      audio = new Audio(right);
      score()
    } else {
      audio = new Audio(wrong);
    }

    audio.play()
  }
}



class App extends Component {
  constructor(props){
    super(props);
    this.state = {questions }
    this.state.question = 0


    }



  clicked(){
    if (this.state.questions.length > this.state.question + 1){
      this.setState({
        question: (this.state.question + 1),
      })
    }
  }



  render() {


    return (
      <div className="App">



            <header>
            <br />
              <img src={require('./logo.jpg')} height="230"  onClick={ ()=> this.clicked() }/>
              <br /><br />
              <div id="score">500000</div>
            </header>
<br /><br />
                  <h4> {this.state.questions[this.state.question].question}</h4>
                  <br />
                  <T  question={this.state.questions[this.state.question]} choice={0}/>
                  <T  question={this.state.questions[this.state.question]} choice={1}/>
                  <T  question={this.state.questions[this.state.question]} choice={2}/>
                  <T  question={this.state.questions[this.state.question]} choice={3}/>



<br />
<br />
<br />

                <footer>
                  <img src={require('./Llamada.png')} height="50"/>
                  <img src={require('./Audience.png')} height="50"/>
                  <img src={require('./Classic5050.png')} height="50" />
                </footer>

      </div>
    );
  }
}

export default App;
