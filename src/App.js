import React, { Component } from 'react';
import { questions } from './questions.json';
import './App.css';

const T = (props) => {
   return( <h1>{props.questions}</h1>)
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
              <img src={require('./logo.jpg')} height="230"  onClick={ ()=> this.clicked() }/>
            </header>

            <T questions={this.state.questions[this.state.question].question}/>
            <T questions={this.state.questions[this.state.question].content[0]}/>
            <T questions={this.state.questions[this.state.question].content[1]}/>
            <T questions={this.state.questions[this.state.question].content[2]}/>
            <T questions={this.state.questions[this.state.question].content[3]}/>


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
