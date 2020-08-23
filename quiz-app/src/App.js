import React from 'react';
import './App.css';
import './index.scss';
import Header from './Header';
import Questions from './Question';
import Button from './Button';
import Results from './Results';
import Arrows from './Arrows';
let clicks = 0;
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
  const root = document.getElementById('root');
  let arrowdisplay = false;
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    questions: questions,
    results: false
  };
  this.renderQuestions = this.renderQuestions.bind(this);
  this.choiceClick = this.choiceClick.bind(this);
  this.calculate = this.calculate.bind(this);
  this.results = this.results.bind(this);
  this.startClick = this.startClick.bind(this);
  this.arrowClick = this.arrowClick.bind(this);
  }
  componentDidMount() {
    this.scroll();
    root.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }

  //scroll after answer is selected
  scroll() {
    const questionPosition = document.querySelectorAll('.question-div');
    let offsetleftQuestions = [];

    questionPosition.forEach( q => {
      const leftPosition = q.offsetLeft;
      offsetleftQuestions.push(leftPosition);                 
    })

    questions.forEach((q, index) => {
      const position = offsetleftQuestions[index];
      Object.assign(q, {left: position});
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
      clicks = selected.length;
      selected.forEach( sd => {
        count++;
      })

      if(count >= 1){
        const left = document.getElementById('left');
        left.classList.remove('hide');
      }

      const position = count < this.state.questions.length ? questions[count].left : questions[questions.length - 1].left;

      if(count === this.state.questions.length){
        this.calculateButton = <Button
                                onClick={this.calculate}
                                title = "Get Results" />;
      } else {
        root.scrollTo({
          top: 0,
          left: position,
          behavior: 'smooth'
        });
        }
   }

   arrowClick(event) {
    const target = event.target.id;
    const selected = document.querySelectorAll('.selected');
      clicks--;
      console.log(clicks);
      const left = this.state.questions[clicks].left;
      root.scrollTo({
        top: 0,
        left: left,
        behavior: 'smooth'
      });
  }

  startClick(event) {
    const left = this.state.questions[0].left;
    this.setState({
      arrows: "block"
    });
    root.scrollTo({
      top: 0,
      left: left,
      behavior: 'smooth'
    });

    const button = event.target;
    button.classList.add('clicked');
    console.log(left);
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

    this.resultsDisplay = setTimeout(function() {this.setState({results: true});}.bind(this), 5000);
    this.score = score;
  }


  results(score) {
    root.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const body = document.querySelector('#root');
    const header = document.querySelector('header');
    header.classList.add('header-results');
    body.classList.add('scrollBody');
    const button = document.querySelectorAll('button');
      button[button.length - 1].classList.remove('animateCircle');
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
    root.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    document.location.reload();
  }
  render() {
    if(clicks > 0) {
      arrowdisplay = true;
    }else{
      arrowdisplay = false;
    }
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
                  onClick={this.arrowClick}
                  disabled={arrowdisplay} />
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
