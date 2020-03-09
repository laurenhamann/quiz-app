import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Board from './components/Board';
import OptionsBar from './components/Aside';
import TopBar from './components/TopBar';

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
         <Board />
      </div>
    );
  }
}
 
export default App;
