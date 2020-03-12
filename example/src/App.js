import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Game from './components/Game';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};

  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    return;
  }
  render() {
    return (
      <div>      
         <Game />
      </div>
    );
  }
}
 
export default App;
