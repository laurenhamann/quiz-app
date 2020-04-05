import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DotList from './components/DotList';
import StyleBar from './components/StyleBar';
import TopBar from './components/TopBar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      game: false,
      color: "#000",
      size: 24,
      space: 1,
      prevSpace: 1,
      text: "&#8226;",
      display: false,
      palette:[],
        dots:[],
      history:[],
      stepNumber: 0,
      redoIndex: 2,
      redoCount: 0,
      undoCount: 0,
      disabledRedo: true,
      disabledUndo: true,
      colors: [
          "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
          "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
          "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
          "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
          "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
          "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
          "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
          "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
          "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
          "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
          "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
          "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
          "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
          "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
          "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
          "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
          "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
          "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
          "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
          "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
          "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
          "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
          "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
          "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
          "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
          "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
          "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
          "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
          "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
          "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
          "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
          "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
          "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
          "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
          "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
          "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
          "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
          "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
          "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
          "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"]
    };
    this.resetButtons = this.resetButtons.bind(this);
    this.changeDotPositionState = this.changeDotPositionState.bind(this);
    this.changeDirectionUp = this.changeDirectionUp.bind(this);
    this.changeDirectionDown = this.changeDirectionDown.bind(this);
    this.changeDirectionLeft = this.changeDirectionLeft.bind(this);
    this.changeDirectionRight = this.changeDirectionRight.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDotPosition = this.handleDotPosition.bind(this);
    this.handleRedo = this.handleRedo.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.enter = this.enter.bind(this);
    this.handleClickSaveColor = this.handleClickSaveColor.bind(this);
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleSpaceChange = this.handleSpaceChange.bind(this);
    this.handleRandomColor = this.handleRandomColor.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOpenOnClick = this.handleOpenOnClick.bind(this);
  }
  componentDidMount() {
    this.handleAddDot();
    window.addEventListener('keydown', this.enter);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight});
  }

  //STARTING ID FOR DOT ARRAY
  prevDotId = 0;

//CONCATING NEW DOT 
  handleAddDot = (i) => {
    this.setState( prevState => {
      return {
        dots: [
          ...this.state.dots,
          {
            name: "dot",
            id:this.prevDotId += 1,
            animation: true,
            left: window.innerWidth * 0.5,
            top: window.innerHeight * 0.5,
            text: this.state.text,
            color: this.state.color,
            size: this.state.size,
            space: this.state.space,
            dotDirection: "down"
          }

        ]
      };
    });
    this.handleSlice();
  }

//CONCATTING THE NEW DOT TO THE HISTORY ARRAY
  handleSlice = () => { 
    const history = this.state.history.slice();
    const slice = this.state.dots.slice();
    this.setState({
      history: history.concat([{
        dots: slice
      }]),
      stepNumber: history.length,
    });
  }

//CLICK FOR STARTING THE GAME
  handleClick() {
    this.setState({game: true});
  }


//GET STATE OF DOT DIRECTION
 getDotDirection() {
    const slice = this.state.dots.slice();
    const current = slice[slice.length - 1];
    const index = slice.indexOf(current);
    this.dotDirection = slice[index].dotDirection;
 }


 //CHANGING LEFT AND TOP STATE ON KEY MOVES

 changeDotPositionState() {
  const slice = this.state.dots.slice();
  const current = slice[slice.length - 1];
  const index = slice.indexOf(current);
    slice[index].left = this.left;
    slice[index].top = this.top;
  this.setState({dots: slice});
 }


//CHANGING STATE DEPENDANT ON DOTLIST FUNCTION CALLS

  //down
  changeDirectionDown(){
    const slice = this.state.dots.slice();
    const current = slice[slice.length - 1];
    const index = slice.indexOf(current);
     slice[index].dotDirection = "down";
    this.setState({dots: slice});
    this.changeDotPositionState();
    this.getDotDirection();
  }

  //right
  changeDirectionRight(){
    const dots = this.state.dots.slice();
    const current = dots[dots.length - 1];
    const index = dots.indexOf(current);
        dots[index].dotDirection = "right";
    this.setState({dots: dots});
    this.changeDotPositionState();
    this.getDotDirection();
  }
  
  //left
  changeDirectionLeft(){
    const dots = this.state.dots.slice();
    const current = dots[dots.length - 1];
    const index = dots.indexOf(current);
        dots[index].dotDirection = "left";
    this.setState({dots: dots});
    this.changeDotPositionState();
    this.getDotDirection();
  }

  //up
  changeDirectionUp(){
    const dots = this.state.dots.slice();
    const current = dots[dots.length - 1];
    const index = dots.indexOf(current);
        dots[index].dotDirection = "up";
    this.setState({dots: dots});
    this.changeDotPositionState();
    this.getDotDirection();
  }

//EVENT FOR UNDO BUTTON IN STYLEBAR TO UNDO THE NEWEST DOT
  handleUndo(event){
    const history = this.state.history.slice();
    //ADDS ALL CHANGES TO DOT FROM STYLEBAR TO THE ARRAY
    this.handleOnChange();

    //TRACKING THE COUNTS
    const undoCount = this.state.undoCount;
    const redoCount = this.state.redoCount;
    const redoIndex = this.state.redoIndex;
    const dotsArray = this.state.dots.slice();  
          dotsArray.splice(-1, 1);

    this.setState({dots: dotsArray,
                  history: history.concat([{
                    dots: dotsArray
                  }]),
                  undoCount: undoCount + 1,
                  changeDirectionUndoCount: this.state.changeDirectionUndoCount + 1,
                  redoIndex: 2,
                  disabledRedo: false,
                });

    this.dotLength = dotsArray.length;
    const current = dotsArray[dotsArray.length - 1];
    const index = dotsArray.indexOf(current);

    //MAKING THE NEW LATEST DOT BLINKING
    const slice = dotsArray.slice();
         slice[index].animation = true;

    const color = slice[index].color;
    const text = slice[index].text;
    const size = slice[index].size;
    const space = slice[index].space;
    this.setState({dots: slice,
                  color: color,
                  text: text,
                  size: size,
                  space: space});

    //DISABLING THE UNDO BUTTON WHEN LESS THAN 2 DOTS ARE LEFT
    if(this.dotLength < 2){
      this.setState({
        disabledUndo: true
      });
    }
  }


//EVENT FOR REDO BUTTON IN STYLEBAR TO REDO THE LATEST UNDID DOT
   handleRedo(event){
    const history = this.state.history;

    //TRACKING WHICH HISTORY OF DOT TO USE
    const redoIndex = this.state.redoIndex;

    //TRACKING THE COUNTS
    const undoCount = this.state.undoCount;
    const redoCount = this.state.redoCount;

    //GETTING CORRECT DOT HISTORY
    const current = history[history.length - redoIndex];
    const lastObjAdded = history.lastIndexOf(current);
    const sliceHistory = history.slice();

    //GETTING VALUE OF THE CORRECT HISTORY SLICE 
    const value = history[lastObjAdded].valueOf();
    const dotValue = history[lastObjAdded].dots.slice();
    const valueOfDot = dotValue.valueOf();
    this.setState({
              dots: valueOfDot,
              history: history.concat(value),
              redoIndex: redoIndex + 2,
              redoCount: redoCount + 1
              
    });

    //SETTING THE STATE OF THE DOT TO DOTS
    const currentDot = dotValue[dotValue.length - 1];
    const index = dotValue.indexOf(currentDot);
    const indexPrev = index - 1;
    const color = dotValue[indexPrev].color;
    const text = dotValue[indexPrev].text;
    const size = dotValue[indexPrev].size;
    const space = dotValue[indexPrev].space;
         dotValue[indexPrev].animation = false;
         console.log(dotValue[indexPrev]);
    this.setState({
      dots: dotValue,
      color: color,
      text: text,
      size: size,
      space: space
    });

    //DISABLING THE REDO BUTTON WHEN UNDOCOUNT AND REDOCOUNT ARE EQUAL
     if(this.state.redoCount === this.state.undoCount - 1){
        this.setState({disabledRedo: true,
                        redoCount: 0,
                        undoCount: 0});
    }
  }

  //ALWAYS GETTING POSITION OF DOT IN DOTLIST COMPONENTUPDATE
  handleDotPosition() {
    this.dotNow = document.getElementById('dotList').lastChild;
    this.left = parseFloat(this.dotNow.style.left);
    this.top = parseFloat(this.dotNow.style.top);
  }

  //SETS STATE WHEN UNDO BUTTON IS CLICKED
  handleOnChange() {
    const slice = this.state.dots.slice();
    const current = slice[slice.length - 1];
    const index = slice.indexOf(current);
    const color = slice[index].color;
    const text = slice[index].text;
    const size = slice[index].size;
    const space = slice[index].space;

    if(index >= 1){
      const leftPos = slice[index].left = this.left;
      const topPos = slice[index].top = this.top;
      const currentState = { left: this.left,
                              top: this.top
                                }
      this.setState({dots: currentState,
                     color: color,
                     text: text,
                     size: size,
                     space: space });
    }
  }

  //EVENT FOR SAVE BUTTON IN STYLEBAR TO SAVE A PALETTE 
  handleClickSaveColor = (i) => {
    this.setState( prevState => {
      return {
        palette: [
          ...this.state.palette,
            {color: this.state.color}
          
        ]
      };
    });
  }



//////////STYLE BAR /////////////


  //OPENS STYLE BAR ON CLICK
  handleOpenOnClick(event){
    this.setState({display: !this.state.display});
  }

  //EVENT FOR BUTTON IN STYLEBAR TO CHANGE DOT COLOR
  handleColorChange(event) {
    this.setState({color: event.target.value });
  }

//EVENT FOR BUTTON IN STYLEBAR TO CHANGE DOT TO RANDOMCOLOR
  handleRandomColor(event){
    this.randomColor = this.state.colors[Math.floor(this.state.colors.length * Math.random())];
    this.setState({color: this.randomColor});
  }


  //EVENT FOR SIZE BUTTONS IN STYLEBAR TO CHANGE FONT SIZE 
  handleSizeChange(event){
    if(event.target.name === 'add'){
      this.setState(prevState => ({
        size: prevState.size + 1
      }));
    }else{
      this.setState(prevState => ({
        size: prevState.size - 1
      }));
      if(this.state.size === 12){
        this.setState({size: 12});
      }
    }
  }

  //EVENT FOR SPACE BUTTONS IN STYLEBAR TO CHANGE THE SPACING BETWEEN DOTS
  handleSpaceChange(event){
    if(event.target.name === 'addSpace'){
      this.setState(prevState => ({
        space: prevState.space + 1,
        prevSpace: prevState.space
      }));
    }else{
      this.setState(prevState => ({
        space: prevState.space - 1,
        prevSpace: prevState.space
      }));
      if(this.state.space === 0){
        this.setState({space: 0});
      }
    }
  }

  //EVENT FOR SHAPE BUTTONS IN STYLEBAR TO CHANGE TEXT INPUT 
  handleShapeChange(event){
    this.setState({text: event.target.value});
  }

  //Resetting state for redoCount and UNDOCOUNT

    resetButtons() {
      this.setState({undoCount: 0,
                      redoCount: 0,
                      disabledRedo: true});
    }


  //ON ENTER PRESS 
    enter(evt) {
      if(evt.keyCode === 13){
        this.getDotDirection();
        const dot = document.getElementById('dotList').lastChild;
        const left = parseFloat(dot.style.left);
        const top = parseFloat(dot.style.top);
        const dots = this.state.dots;
        const current = dots[dots.length - 1];
        const index = dots.indexOf(current);

        const sliceCurrent = dots.slice();
          sliceCurrent[index].animation = false;
          sliceCurrent[index].left = left;
          sliceCurrent[index].top = top;
          sliceCurrent[index].color = this.state.color;
          sliceCurrent[index].text = this.state.text;
          sliceCurrent[index].space = this.state.space;
          sliceCurrent[index].size = this.state.size;


      this.setState({dots: sliceCurrent});
      
      this.handleAddDot();

      //WHEN THE DOTS ARRAY IS GREATER THAN OR EQUAL TO 2 BUTTON IS NO LONGER DISABLED
        this.dot = this.state.dots.slice();
        this.dotLength = this.dot.length;
      if(this.dotLength >= 2){
        this.setState({disabledUndo: false});
      }
    }
  }



  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const dots = this.state.dots.slice();
    const currentDot = dots[dots.length - 1];
    const indexOfCurrentDot = dots.indexOf(currentDot);
    const dotDirection = this.dotDirection;
    const gameStarted = this.state.game;
    const newColor = this.state.color;
    const newSize = this.state.size;
    const newSpace = this.state.space;
    const prevStateSpace = this.state.prevSpace;
    const palette = this.state.palette;
    const undoCount = this.state.undoCount;
    const redoCount = this.state.redoCount;
    const undoDisabled = this.state.disabledUndo;

    return(<div style={{width: this.state.width, height: this.state.height}} id="board">
      

      {gameStarted ? (
        <React.Fragment>
          <div className="Header">
          <StyleBar 
            triggerColorChange={this.handleColorChange}
            triggerSizeChange={this.handleSizeChange}
            triggerSpaceChange={this.handleSpaceChange}
            triggerShapeChange={this.handleShapeChange}
            triggerSaveColor={this.handleClickSaveColor}
            randomColor={this.handleRandomColor}
            size={newSize}
            space={newSpace}
            color={newColor}
            palette={palette}
            handleOnClick={this.handleOpenOnClick}
            display={this.state.display}
            text={this.props.text}
             />
            <TopBar 
            style={this.state.display === true ? {width: "50%"} : {width: "10%"}}
            triggerUndo={this.handleUndo}
            triggerRedo={this.handleRedo}
            disabledRedo={this.state.disabledRedo}
            disabledUndo={this.state.disabledUndo}/>
          </div>
          <DotList 
            color={newColor}
            size={newSize}
            space={newSpace}
            prevSpace={prevStateSpace}
            text={this.state.text}
            dots={this.state.dots}
            addDot={this.handleAddDot}
            enter={this.enter}
            triggerPositioning={this.handleDotPosition}
            currentDot={indexOfCurrentDot}
            undoCount={undoCount}
            triggerReset={this.resetButtons}
            undoDisabled={this.state.disabledUndo}
            changeDirectionDown={this.changeDirectionDown}
            changeDirectionUp={this.changeDirectionUp}
            changeDirectionLeft={this.changeDirectionLeft}
            changeDirectionRight={this.changeDirectionRight}
            dotDirection={dotDirection}
             /> 
            
        </React.Fragment>
      ) : (
        
        <button onClick={this.handleClick}>
          Start game
        </button>
      )}
        
    </div>
    );
  }
}


export default App;

