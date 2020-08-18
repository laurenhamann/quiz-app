import React from 'react';
import './App.css';
import './index.scss';
import Header from './Header';
import Questions from './Question';
import Button from './Button';
import Results from './Results';
import Arrows from './Arrows';

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

  const lowSubtitle = "Your results show a low liklihood of BLANK";
  const lowDescription = "Intrinsicly leverage existing bricks-and-clicks core competencies after frictionless solutions. Monotonectally deliver state of the art systems rather than top-line intellectual capital. Objectively recaptiualize backward-compatible channels without long-term high-impact benefits. Uniquely matrix flexible infrastructures whereas enterprise synergy. Conveniently engage market-driven human capital without virtual infrastructures.";
  const midSubtitle = "Your results show a mid-range likihood of BLANK";
  const midDescription = "Intrinsicly leverage existing bricks-and-clicks core competencies after frictionless solutions. Monotonectally deliver state of the art systems rather than top-line intellectual capital. Objectively recaptiualize backward-compatible channels without long-term high-impact benefits. Uniquely matrix flexible infrastructures whereas enterprise synergy. Conveniently engage market-driven human capital without virtual infrastructures.";
  const highSubtitle = "Your results show a high likihood of BLANK";
  const highDescription = "Intrinsicly leverage existing bricks-and-clicks core competencies after frictionless solutions. Monotonectally deliver state of the art systems rather than top-line intellectual capital. Objectively recaptiualize backward-compatible channels without long-term high-impact benefits. Uniquely matrix flexible infrastructures whereas enterprise synergy. Conveniently engage market-driven human capital without virtual infrastructures.";
  const errSubtitle = "There was an error while processing your results";
  const errDescription = "Please click the restart button and try again";
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    questions: questions,
    results: false,
    arrows: "none"

  };
  this.renderQuestions = this.renderQuestions.bind(this);
  this.choiceClick = this.choiceClick.bind(this);
  this.calculate = this.calculate.bind(this);
  this.results = this.results.bind(this);
  this.startClick = this.startClick.bind(this);
  }
  componentDidMount() {
    this.scroll();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }

  //scroll after answer is selected
  scroll() {
    const questionPosition = document.querySelectorAll('.question-div');
    let offsetTopQuestions = [];

    questionPosition.forEach( q => {
      const topPosition = q.offsetTop;
      offsetTopQuestions.push(topPosition);
      // const answerDiv = q.querySelector('.answers .selected') === null ? window.scrollTo({
      //     top: offsetTopQuestions[offsetTopQuestions.indexOf(q) + 1],
      //     left: 0,
      //     behavior: 'smooth'
      //   }) : null ;                 
    })

    questions.forEach((q, index) => {
      const position = offsetTopQuestions[index];
      Object.assign(q, {top: position});
    })
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
      const position = count < this.state.questions.length ? questions[count].top : questions[questions.length - 1].top;

      if(count >= this.state.questions.length - 1){
        this.calculateButton = <Button
                                onClick={this.calculate}
                                title = "Get Results" />;
        console.log('in');
        const newPosition = position + 5000;
        console.log(newPosition);
        window.scrollTo({
          top: newPosition,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: position,
          left: 0,
          behavior: 'smooth'
        });
        console.log(count);
        }
   }

   arrowClick(event) {
    const target = event.target.id;
    console.log(target);
    console.log('ran');
   }

   startClick() {
      const top = this.state.questions[0].top;
      this.setState({
        arrows: "block"
      });
      window.scrollTo({
          top: top,
          left: 0,
          behavior: 'smooth'
        });
   }

  calculate(event) {
    const button = event.target;
    button.classList.add('animateCircle');
    console.log(button);

    let score = 0;

    this.state.questions.forEach( q => {
      const num = q.score;
      score = score + num;
    })

    this.resultsDisplay = setTimeout(function() {this.setState({results: true});}.bind(this), 2000);
    this.score = score;
  }


  results(score) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    header.classList.add('header-results');
    body.classList.add('scrollBody');
    let result;
    if(score < 5){
      console.log('in lower');
     result = <Results 
        subtitle={lowSubtitle}
        description={lowDescription}
      />;
    } else if (score > 5 && score < 16){
      console.log('in mid');
       result = <Results 
          subtitle={midSubtitle}
          description={midDescription}
        />;
    }else if(score > 16) {
      console.log('in high');
      result = <Results 
          subtitle={highSubtitle}
          description={highDescription}
        />;
    }else {
      console.log('in error');
      result = <Results 
          subtitle={errSubtitle}
          description={errDescription}
        />;
    }
    return result;
  }

  reload() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    window.location.reload();
  }
  render() {
    this.scroll();
    let display;
    let button;
    let arrows;
    if(this.state.results) {
      display = this.results(this.score);
      button = <Button 
                onClick = {this.reload}
                title = "Restart"
                />
    }else {
      display = this.renderQuestions();
      arrows = <Arrows
                  display = {this.state.arrows}
                  onClick={this.arrowClick} />
      button = this.calculateButton;
    }
    return (
      <React.Fragment>
        <Header 
        onClick={this.startClick}/>
        {arrows}
        {display}
        {button}
        
      </React.Fragment>
    );
  }
}

export default App;
