import React from 'react';
import './App.css';
import './index.scss';
import Header from './Header';
import Questions from './Question';
import Button from './Button';
import Results from './Results';
const questions = [
                  {
                    question: "Michigan is larger than Great Britain.",
                    type: "boolean",
                    answer: "True"
                  },
                  {   
                    question: "The five rings on the Olympic flag are interlocking",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "Sydney is the capital of Australia",
                    type: "boolean",
                    score: 0,
                    answer: "False"
                  },
                  {
                    question: "50 Cent and Charlie Chaplin were alive at the same time.",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "There are 14 bones in a human foot",
                    type: "boolean",
                    score: 0,
                    answer: "False"
                  },
                  {
                    question: "The population of California is larger than the entire population of Canada",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "More people are killed each year by cows than by sharks",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "There are over 2,500 stars on the Hollywood Walk of Fame",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  { 
                    question: "The Great Wall of China is visible from space",
                    type: "boolean",
                    answer: "False"
                  },
                  {
                    question: "Donald Duck’s middle name is Fauntelroy",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "Stephen Hawking declined a knighthood from the Queen",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "A woman has walked on the moon",
                    type: "boolean",
                    score: 0,
                    answer: "False"
                  },
                  {
                    question: "If you add the two numbers on the opposite sides of dice together, the answer is always 7",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "The moon is just 50 percent of the mass of Earth",
                    type: "boolean",
                    score: 0,
                    answer: "False"
                  },
                  {
                    question: "You can sneeze during sleep",
                    type: "boolean",
                    score: 0,
                    answer: "False"
                  },
                  {
                    question: "Nearly three percent of the ice in Antarctic glaciers is penguin urine",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "A snail can sleep for three months",
                    type: "boolean",
                    score: 0,
                    answer: "False"
                  },
                  {
                    question: "It takes a sloth two weeks to digest its food",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "The first tea bags were made of silk",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  },
                  {
                    question: "Camels have three sets of eyelashes",
                    type: "boolean",
                    score: 0,
                    answer: "True"
                  }];

const root = document.getElementById('root');
class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    questions: questions,
    results: false,
    score: 0,
    index: -1
  };
  this.renderQuestions = this.renderQuestions.bind(this);
  this.choiceClick = this.choiceClick.bind(this);
  this.calculate = this.calculate.bind(this);
  // this.results = this.results.bind(this);
  this.startClick = this.startClick.bind(this);
  // this.arrowClick = this.arrowClick.bind(this);
  }
  componentDidMount() {
    root.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }

  //setting all left positions of each question for scroll function
  scroll() {
    const questionPosition = document.querySelectorAll('.question-div');
    let offsetleftQuestions = [];
    questionPosition.forEach( q => {
      const leftPosition = q.offsetLeft;
      offsetleftQuestions.push(leftPosition);   
      console.log(leftPosition)              
    })
    questions.forEach((q, index) => {
      const position = offsetleftQuestions[index];
      Object.assign(q, {left: position});
    })
  }

  // Renders all html elements for the question component
  renderQuestions () {
    const questions = this.state.questions.map((q, i) => 
      <Questions 
        question={q.question}
        type={q.type}
        score={this.choiceClick}
        index={i}
        answer={q.answer}
      />
    );
    return questions
  }

  choiceClick(event, answer, choosen) {     
      let score;
      console.log(answer, choosen)
      if(answer === choosen){
        console.log(answer, choosen)
        score = 1;
      }else {
        score = 0;
      }
      let index = this.state.index += 1;
      this.setState({
        score: this.state.score += score,
        index: index
      });
      const position = index < this.state.questions.length ? questions[index].left : questions[questions.length - 1].left;
      if(index === this.state.questions.length){
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

  // arrowClick(event) {
  //   const target = event.target.id;
  //   const selected = document.querySelectorAll('.selected');
  //     const left = this.state.questions[clicks].left;
  //     root.scrollTo({
  //       top: 0,
  //       left: left,
  //       behavior: 'smooth'
  //     });
  // }

  startClick(event) {
    const left = this.state.questions[0].left;
    console.log(this.state.questions[1])
    let index = this.state.index += 1;
    this.setState({
      arrows: "block",
      index: index
    });
    console.log(left);
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
    this.resultsDisplay = setTimeout(function() {this.setState({results: true});}.bind(this), 5000);

  }

// get results 
  results() {
    root.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    const body = document.querySelector('#root');
    const header = document.querySelector('header');
    header.classList.add('header-results');
    body.classList.add('scrollBody');
    return <Results score={this.state.score} />
  }

  // restart quiz
  reload() {
    root.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    document.location.reload();
  }
  render() {
    this.scroll();
    let display;
    let button;
    if(this.state.results) {
      display = this.results();
      button = <Button 
                onClick = {this.reload}
                title = "Restart"
                />
    }else {
      display = this.renderQuestions();
      button = this.calculateButton;
    }
    return (
      <React.Fragment>
        <Header 
        onClick={this.startClick}/>
        {display}
        {button}
        
      </React.Fragment>
    );
  }
}

export default App;
