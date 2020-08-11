import React from 'react';
import './App.css';
import './index.scss';
import Header from './Header';
import Questions from './Question';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    quizOne:[ 
          {
            question: "6 + 4",
            choices: [{
                    choice: 10,
                    correct: true},
                    {choice: 8,
                    correct: false},
                    {choice: 11,
                    correct: false},
                   {choice: 32,
                   correct: false}
                ]
          },
          {
            question: "8 * 10",
            choices: [{
                    choice: 18,
                    correct: false},
                    {choice: 80,
                    correct: true},
                    {choice: 34,
                    correct: false},
                   {choice: 100,
                   correct: false}
                ]
          },
          {
            question: "100 / 2",
            choices: [{
                    choice: 187,
                    correct: false},
                    {choice: 50,
                    correct: true},
                    {choice: 180,
                    correct: false},
                   {choice: 130,
                   correct: false}
                ]
          },
          {
            question: "120 - 2",
            choices: [{
                    choice: 18,
                    correct: false},
                    {choice: 118,
                    correct: true},
                    {choice: 140,
                    correct: false},
                   {choice: 20,
                   correct: false}
                ]
          }
        ]
  };
  this.renderQuestions = this.renderQuestions.bind(this);
  }

  renderQuestions = () => {
    const quiz = this.state.quizOne.map((quiz, i) => 
       <Questions 
        question={quiz.question}
        answers={quiz.choices}/>
    
    );
    return quiz;
  }

  render() {
    console.log(this.renderQuestions);
    return (
      <React.Fragment>
        <Header />
        {this.renderQuestions()}
      </React.Fragment>
    );
  }
}

export default App;
