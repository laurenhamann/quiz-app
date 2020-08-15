import React from 'react';
import './App.css';
import './index.scss';
import Header from './Header';
import Questions from './Question';
import Calculate from './Calculate';

const questions = [{question: "Question One",
                    type: "boolean",
                    score: 0},
                    {question: "Question Two",
                    type: "boolean",
                    score: 0},
                    {question: "Question Three",
                    type: "boolean",
                    score: 0},
                    {question: "Question Four",
                    type: "boolean",
                    score: 0},
                    {question: "Question Five",
                    type: "boolean",
                    score: 0},
                    {question: "Question Six",
                    type: "boolean",
                    score: 0},
                    {question: "Question Seven",
                    type: "boolean",
                    score: 0},
                    {question: "Question Eight",
                    type: "boolean",
                    score: 0},
                    {question: "Question Nine",
                    type: "boolean"},
                    {question: "Question Ten",
                    type: "boolean",
                    score: 0},
                    {question: "Question Eleven",
                    type: "scaleToFive",
                    score: 0},
                    {question: "Question Twelve",
                    type: "scaleToFive",
                    score: 0},
                    {question: "Question 13",
                    type: "scaleToFive",
                    score: 0},
                    {question: "Question 14",
                    type: "scaleToFive",
                    score: 0},
                    {question: "Question 15",
                    type: "scaleToFive",
                    score: 0},
                    {question: "Question 16",
                    type: "scaleDisagreeToAgree",
                    score: 0},
                    {question: "Question 17",
                    type: "scaleDisagreeToAgree",
                    score: 0},
                    {question: "Question 18",
                    type: "scaleDisagreeToAgree",
                    score: 0},
                    {question: "Question 19",
                    type: "scaleDisagreeToAgree",
                    score: 0},
                    {question: "Question 20",
                    type: "scaleDisagreeToAgree",
                    score: 0}];
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    questions: questions,

  };
  this.renderQuestions = this.renderQuestions.bind(this);
  this.choiceClick = this.choiceClick.bind(this);
  }

  renderQuestions = () => {
    const questions = this.state.questions.map((q, i) => 
       <Questions 
        question={q.question}
        type={q.type}
        score={this.choiceClick}
        index={i}
        />
    
    );
    return questions;
  }

  choiceClick(event, score, index) {
    const target = event.target;
    const parent = target.parentNode;
    const siblings = parent.childNodes;
      siblings.forEach( s => {
        if(s.classList.contains('selected')){
          s.classList.remove('selected');
        }
      })
      target.classList.add('selected');
    const arrayQuestion = this.state.questions.slice();
          arrayQuestion[index].score = score;

      this.setState({
        questions: arrayQuestion
      });

      const selected = document.querySelectorAll('.selected');
      let count = 0;
      selected.forEach( sd => {
        count++;
      })
      console.log(count);
      if(count === this.state.questions.length){
        this.calculateButton = <Calculate />;
        console.log('in');
      }
   }

  render() {
    //console.log(this.renderQuestions);
    return (
      <React.Fragment>
        <Header />
        {this.renderQuestions()}
        {this.calculateButton}
      </React.Fragment>
    );
  }
}

export default App;
