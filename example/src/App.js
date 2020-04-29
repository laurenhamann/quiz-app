import React from 'react';
import DotList from './components/DotList';
import StyleBar from './components/StyleBar';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      game: false,
      history:[{
        dots:[],
      }],
      selectedDots: 0,
      default: true,
      backgroundColor: "#ffffff",
      resetAsk: false,
      //Top Bar State
      redoIndex: 2,
      undoIndex: 2,
      redoCount: 0,
      undoCount: 0,
      selectMode: false,
      undoColorCount: 0,
      redoColorCount: 0,
      disabledRedo: true,
      disabledUndo: true,
      colorUndo: false,
      colorRedo: false,
      colorUndoIndex: 1,
      colorRedoIndex: 1,
      selectDot: true,
      //Style Bar State
      display: false,
      color: "#000000",
      size: 24,
      space: 1,
      prevSpace: 1,
      text: "&#8226;",
      palette:[],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDotPosition = this.handleDotPosition.bind(this);
    this.changeDirectionUp = this.changeDirectionUp.bind(this);
    this.changeDirectionDown = this.changeDirectionDown.bind(this);
    this.changeDirectionLeft = this.changeDirectionLeft.bind(this);
    this.changeDirectionRight = this.changeDirectionRight.bind(this);
    this.selectDot = this.selectDot.bind(this);
    this.enter = this.enter.bind(this);
    this.exitReset = this.exitReset.bind(this);
    this.resetAsk = this.resetAsk.bind(this);
    this.random = this.random.bind(this);
    this.colorChange = this.colorChange.bind(this);
    //TOP BAR FUNCTIONS
    this.handleRedo = this.handleRedo.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleColorUndo = this.handleColorUndo.bind(this);
    this.handleColorRedo = this.handleColorRedo.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.resetAll = this.resetAll.bind(this);
    //STYLE BAR FUNCTIONS
    this.handleOpenOnClick = this.handleOpenOnClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleClickSaveColor = this.handleClickSaveColor.bind(this);
    this.handleRandomColor = this.handleRandomColor.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleShapeChange = this.handleShapeChange.bind(this);
    this.handleSpaceChange = this.handleSpaceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.blackOut = this.blackOut.bind(this);
    this.handleBackgroundRandomColor = this.handleBackgroundRandomColor.bind(this);
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

//CLICK FOR STARTING THE GAME
  handleClick() {
    this.setState({game: true});
  }

//STARTING ID FOR DOT ARRAY
  prevDotId = 0;

//CONCATING NEW DOT 
  handleAddDot = (i) => {
    this.setState({
        history:this.history.concat([{
        dots: this.currentDotArray.concat([{
            name: "dot",
            id:this.prevDotId += 1,
            animation: true,
            left: window.innerWidth * 0.5,
            top: window.innerHeight * 0.5,
            text: this.state.text,
            color: this.state.color,
            prevColor: [],
            size: this.state.size,
            space: this.state.space,
            dotDirection: "down"
        }]),
      }]),
      });
    this.getSelectedDot();
    }

//ALWAYS GETTING POSITION OF DOT IN DOTLIST COMPONENTUPDATE
  handleDotPosition() {
    this.dotNow = document.getElementById(this.indexOfDot);
    this.left = parseFloat(this.dotNow.style.left);
    this.top = parseFloat(this.dotNow.style.top);
  }

  getCurrAndPrevDotIndex() {
    this.history = this.state.history.slice();
    this.current = this.history[this.history.length - 1];
    this.hisIndex = this.history.indexOf(this.current);
    this.currentDotArray = this.current.dots.slice();
    this.indexOfDot = this.index === undefined  ? this.currentDotArray.length - 1 : this.index;
    this.prevIndex = this.state.selectedDots === -1 ? 0 : this.state.selectedDots;
    this.currentDot = this.currentDotArray[this.indexOfDot];
    this.prevDot = this.currentDotArray[this.prevIndex];
    this.indexOfCurrentDot = this.currentDotArray.indexOf(this.currentDot);
    this.indexOfPrevDot = this.currentDotArray.indexOf(this.prevDot);
}

//CHANGING LEFT AND TOP STATE ON KEY MOVES
  changeDotPositionState() {
      const history = this.state.history.slice();
      const current = history[history.length - 1];
      const hisIndex = history.indexOf(current);
      const dotSlice = current.dots.slice();
      const currentDot = dotSlice[this.indexOfDot];
      const index = dotSlice.indexOf(currentDot);
      history[hisIndex].dots[index].left = this.left;
      history[hisIndex].dots[index].top = this.top;
    this.setState({
      history: history
    });
  }


//CHANGING STATE DEPENDANT ON DOTLIST FUNCTION CALLS

//down
  changeDirectionDown(){
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
      history[hisIndex].dots[this.indexOfDot].dotDirection = 'down';
    this.setState({
      history: history
    })
    
    this.dotDirection = history[hisIndex].dots[this.indexOfDot].dotDirection;
    this.changeDotPositionState();
  }

//right
  changeDirectionRight(){
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
      history[hisIndex].dots[this.indexOfDot].dotDirection = 'right';
    this.setState({
      history: history
    })
    
    this.dotDirection = history[hisIndex].dots[this.indexOfDot].dotDirection;
    this.changeDotPositionState();
  }
  
//left
  changeDirectionLeft(){
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
      history[hisIndex].dots[this.indexOfDot].dotDirection = 'left';
    this.setState({
      history: history
    })
    
    this.dotDirection = history[hisIndex].dots[this.indexOfDot].dotDirection;
    this.changeDotPositionState();
  }

//up
  changeDirectionUp(){
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
      history[hisIndex].dots[this.indexOfDot].dotDirection = 'up';
    this.setState({
      history: history
    })
    
    this.dotDirection = history[hisIndex].dots[this.indexOfDot].dotDirection;
    this.changeDotPositionState();
  }



//Onclick of dots
  selectDot(event){
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const selected = event.target.getAttribute('id');
    const selectedDot = selected - 1;
    const hisIndex = history.indexOf(current);
    const dotSlice = current.dots.slice();
    const currentDot = dotSlice[dotSlice.length - 1];
    const index = dotSlice.indexOf(currentDot);
        history[hisIndex].dots[selectedDot].animation = true;
        history[hisIndex].dots[index].animation = false;
      this.setState({
        history: history,
        selectMode: true,
        selectDot: false,
      });
    this.getSelectedDot();
    this.setState({
        selectedDots: this.index
    });
    this.colorChange();
}


  colorChange() {
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
    const color = this.state.color;
      history[hisIndex].dots[this.indexOfDot].prevColor = history[hisIndex].dots[this.indexOfDot].prevColor.concat([{
          prevColor: color
        }]);
      history[hisIndex].dots[this.indexOfDot].color = color;
    this.setState({
      history: history
    });
  }

  getSelectedDot(){
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
    const dot = history[hisIndex].dots;
    this.selectedDot = dot.map((dot, index) => {
      if(dot.animation){
        return this.index = index
      }
    });
    const currentDotArray = current.dots.slice();
    const currentDot = currentDotArray[this.index];
    this.indexOfCurrentDot = currentDotArray.indexOf(currentDot);
  }

//ON ENTER PRESS 
  enter(evt) {
    if(evt.keyCode === 13){
      this.dotDirection = this.currentDot.dotDirection;
      const history = this.state.history.slice();
      const current = history[history.length - 1];
      const hisIndex = history.indexOf(current);
      const dotSlice = current.dots.slice();
      const indexOfDot = this.index === undefined ? 0 : this.index;
      const currentDot = dotSlice[indexOfDot];
      const index = dotSlice.indexOf(currentDot);
        history[hisIndex].dots[index].animation = false;
        history[hisIndex].dots[index].left = this.left;
        history[hisIndex].dots[index].top = this.top;
        history[hisIndex].dots[index].color = this.state.color;
        history[hisIndex].dots[index].text = this.state.text;
        history[hisIndex].dots[index].space = this.state.space;
        history[hisIndex].dots[index].size = this.state.size;
      this.setState({
      history: history,
      colorUndo: false,
      undoIndex: 2,
      selectMode: false,
      selectDot: true,
      selectedDots: indexOfDot
    });
    //Adding another dot
      this.handleAddDot();
      this.dotLength = dotSlice.length;
    //WHEN THE DOTS ARRAY IS GREATER THAN OR EQUAL TO 2 BUTTON IS NO LONGER DISABLED
      if(this.dotLength >= 2){
        this.setState({disabledUndo: false});
      }
    }
  }


//////////TOP BAR /////////////

//EVENT FOR UNDO BUTTON IN STYLEBAR TO UNDO THE NEWEST DOT
  handleUndo(event){
    if(this.state.selectMode){
      const history = this.state.history;
      const historyLength = history[history.length - 1];
      const historyIndex = history.indexOf(historyLength);
      const dotSlice = history[historyIndex].dots.slice();
            dotSlice.splice(this.index, 1);
            dotSlice[this.indexOfPrevDot].animation = true;
            dotSlice[this.indexOfPrevDot].redoAnimation = false;
      const color = history[historyIndex].dots[this.indexOfPrevDot].color;
      const text = history[historyIndex].dots[this.indexOfPrevDot].text;
      const size = history[historyIndex].dots[this.indexOfPrevDot].size;
      const space = history[historyIndex].dots[this.indexOfPrevDot].space;

      this.setState({
        history: history.concat([{
          dots: dotSlice
        }]),
        undoCount: this.state.undoCount + 1,
        undoIndex: this.state.undoIndex + 2,
        redoIndex: 2,
        disabledRedo: false,
        color: color,
        text: text,
        size: size,
        space: space,
        selectedDots: this.state.selectedDots - 1
      });

      if(this.index < 3) {
        this.setState({
          disabledUndo: true,
          selectMode: false,
          selectedDots: 0
        });
      }   
    }else{
      //ADDS ALL CHANGES TO DOT FROM STYLEBAR TO THE ARRAY
      this.handleOnChange();
      //TRACKING THE COUNTS
      const undoCount = this.state.undoCount;
      const history = this.state.history.slice();
    //TRACKING WHICH HISTORY OF DOT TO USE
      const undoIndex = this.state.undoIndex;
    //GETTING CORRECT DOT HISTORY
      const current = history[history.length - undoIndex];
      const lastObjAdded = history.lastIndexOf(current);
    //GETTING VALUE OF THE CORRECT HISTORY SLICE 
      const dotValue = history[lastObjAdded].dots;
      const valueOfDot = dotValue.valueOf();
        history[lastObjAdded].dots[this.indexOfPrevDot].animation = true;
      const color = history[lastObjAdded].dots[this.indexOfPrevDot].color;
      const text = history[lastObjAdded].dots[this.indexOfPrevDot].text;
      const size = history[lastObjAdded].dots[this.indexOfPrevDot].size;
      const space = history[lastObjAdded].dots[this.indexOfPrevDot].space;
      this.dotLength = dotValue.length;
      this.setState({
                    history: history.concat([{
                      dots: valueOfDot
                    }]),
                    undoCount: undoCount + 1,
                    undoIndex: undoIndex + 2,
                    redoIndex: 2,
                    disabledRedo: false,
                    color: color,
                    text: text,
                    size: size,
                    space: space,
                    selectedDots: this.state.selectedDots - 1
      });
    }
    this.getSelectedDot();
    //DISABLING THE UNDO BUTTON WHEN LESS THAN 2 DOTS ARE LEFT
    if(this.dotLength < 2){
      this.setState({
        disabledUndo: true,
        selectedDots: 0

      });
    }
  }


  //EVENT FOR REDO BUTTON IN STYLEBAR TO REDO THE LATEST UNDID DOT
  handleRedo(event){
    const history = this.state.history.slice();

  //TRACKING WHICH HISTORY OF DOT TO USE
    const redoIndex = this.state.redoIndex;

  //TRACKING THE COUNTS
    const redoCount = this.state.redoCount;

  //GETTING CORRECT DOT HISTORY
    const current = history[history.length - redoIndex];
    const lastObjAdded = history.indexOf(current);

  //GETTING VALUE OF THE CORRECT HISTORY SLICE 
    const dotValue = history[lastObjAdded].dots.slice();
    const valueOfDot = dotValue.valueOf();
    const indexPrev = this.indexOfDot - 1;
    console.log(valueOfDot);
    const newDot = history[lastObjAdded].dots;
    const length = newDot[newDot.length - 1];
    const index = newDot.indexOf(length);
    console.log(index);
    this.redoIndexAnimation = index;

    const color = history[lastObjAdded].dots[this.indexOfDot].color;
    const text = history[lastObjAdded].dots[this.indexOfDot].text;
    const size = history[lastObjAdded].dots[this.indexOfDot].size;
    const space = history[lastObjAdded].dots[this.indexOfDot].space;
        history[lastObjAdded].dots[this.indexOfDot].animation = false;
    this.setState({
              history: history.concat([{
                        dots: valueOfDot
                    }]),
              redoIndex: redoIndex + 2,
              redoCount: redoCount + 1,
              disabledUndo: false,
              selectedDots: this.state.selectedDots + 1
              
    });


  //SETTING THE STATE OF THE DOT TO DOTS
    this.setState({
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


  handleColorUndo(event) {
    const colorUndoIndex = this.state.colorUndoIndex;
    const history = this.state.history.slice();
    const currentHistory = history[history.length - 1];
    const indexOfCurrHistory = history.indexOf(currentHistory);
    const selectedDot = history[indexOfCurrHistory].dots[this.index].prevColor.slice();
    const lastColorAdded = selectedDot[selectedDot.length - 1];
    const indexOfLastColorAdded = selectedDot.indexOf(lastColorAdded);
    const lastChanged = selectedDot[selectedDot.length - colorUndoIndex];
    const currentIndex = selectedDot.indexOf(lastChanged);
    const dotPrevColor = selectedDot[currentIndex].prevColor;
    if(selectedDot[indexOfLastColorAdded].prevColor !== history[indexOfCurrHistory].dots[this.index].color){
      this.colorChange();
    }
      history[indexOfCurrHistory].dots[this.index].color = dotPrevColor;
    this.setState({
      history: history,
      color: dotPrevColor,
      colorUndoIndex: colorUndoIndex + 1,
      colorRedoIndex: colorUndoIndex,
      undoColorCount: this.state.undoColorCount + 1,
      colorRedo: true,
    });
    if(this.state.undoColorCount === selectedDot.length - 1){
      this.setState({
          colorUndo: false,
          colorUndoIndex: 1
      });
    }
  }


  handleColorRedo(event) {
    const colorRedoIndex = this.state.colorRedoIndex;
    const history = this.state.history.slice();
    const currentHistory = history[history.length - 1];
    const indexOfCurrHistory = history.indexOf(currentHistory);
    const selectedDot = history[indexOfCurrHistory].dots[this.index].prevColor.slice();
    const lastChanged = selectedDot[selectedDot.length - colorRedoIndex];
    const currentIndex = selectedDot.indexOf(lastChanged);
    const dotRedoColor = selectedDot[currentIndex].prevColor;    
      history[indexOfCurrHistory].dots[this.index].color = dotRedoColor;
    this.setState({
      history: history,
      color: dotRedoColor,
      colorRedoIndex: this.state.colorRedoIndex - 1,
      redoColorCount: this.state.redoColorCount + 1,
    });
    if(this.state.colorRedoIndex === 1){
      this.setState({
          colorRedo: false,
          colorRedoIndex: 1
      });
    }
  }


//SETS STATE OF THE UNDID DOT WHEN UNDO BUTTON IS CLICKED
  handleOnChange() {
    const slice = this.state.history.slice();
    const current = slice[slice.length - 1];
    const index = slice.indexOf(current);
    const currDot = current.dots.slice();
    const lengthDot = currDot[currDot.length - 1];
    const indexCurr = currDot.indexOf(lengthDot);
    const color = slice[index].dots[indexCurr].color;
    const text = slice[index].dots[indexCurr].text;
    const size = slice[index].dots[indexCurr].size;
    const space = slice[index].dots[indexCurr].space;
    if(index >= 1){
      slice[index].dots[indexCurr].left = this.left;
      slice[index].dots[indexCurr].top = this.top;
      this.setState({history: slice,
                     color: color,
                     text: text,
                     size: size,
                     space: space });
    }
  }

  resetAsk() {
    this.setState({
      resetAsk: true
    });
  }

  exitReset() {
    this.setState({
      resetAsk: false
    });
  }

  resetAll(){
    this.setState({game: false});
    window.location.reload();
  }


//////////STYLE BAR /////////////


//OPENS STYLE BAR ON CLICK
  handleOpenOnClick(event){
    this.setState({display: !this.state.display});
  }

//EVENT FOR BUTTON IN STYLEBAR TO CHANGE DOT COLOR
  handleColorChange(event) {
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
    const color = this.state.color;
      history[hisIndex].dots[this.indexOfDot].prevColor = history[hisIndex].dots[this.indexOfDot].prevColor.concat([{
          prevColor: color
        }]);
      history[hisIndex].dots[this.indexOfDot].color = event.target.value;
    this.setState({ history: history,
                    color: event.target.value,
                    colorUndo: true });
  }

//EVENT FOR BUTTON IN STYLEBAR TO CHANGE DOT TO RANDOMCOLOR
  handleRandomColor(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // this.randomColor = this.state.colors[Math.floor(this.state.colors.length * Math.random())];
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
    const color = this.state.color;
    const ranColor = "#" + randomColor;
      history[hisIndex].dots[this.indexOfDot].prevColor = history[hisIndex].dots[this.indexOfDot].prevColor.concat([{
          prevColor: color
        }]);
      history[hisIndex].dots[this.indexOfDot].color = this.randomColor;
    this.setState({ history: history,
                    color: ranColor,
                    colorUndo: true});
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


  handleSubmit(event){
    event.preventDefault();
  }

//BACKGROUND CHANGES

//EVENT FOR BUTTON IN STYLEBAR TO CHANGE DOT TO RANDOMCOLOR
  handleBackgroundRandomColor(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const ranColor = "#" + randomColor;    
    this.setState({ default: false,
                    backgroundColor: ranColor});
  }
//Blackout Feature 
  blackOut() {
    this.setState(prevState => ({default: !prevState.default}));
    if(this.state.default === false){
      this.setState({backgroundColor: "#ffffff",
                      color: "#000000",
                            })
    }else if(this.state.default){
      this.setState({backgroundColor: "#000000",
                      color: "#ffffff",
                    })
    }
  }

  random(){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.ranColor = "#" + randomColor;
      if(!this.state.game){
        const board = document.getElementById('board');
              board.style.backgroundColor = this.ranColor;
      }else{
        const board = document.getElementById('board');
              board.style.backgroundColor = this.state.backgroundColor;
      }
      console.log(this.ranColor);
    }


  render(){
    this.getSelectedDot();
    this.colorChange = setInterval(this.random, 2000);

  //Setting Left position for start button
    const halfWidth = window.innerWidth / 2;
    const leftButton = halfWidth - 104.6485;

    const backgroundStart = {
      backgroundColor: this.ranColor
    }

  //Getting current previous index of dots
    this.getCurrAndPrevDotIndex();

    return(<div style={this.state.game ? {width: this.state.width, height: this.state.height, backgroundColor: this.state.backgroundColor} : {width: this.state.width, height: this.state.height}} id="board"  className={this.state.resetAsk ? "greyBackground" : "none"}>
      

      {this.state.game ? (
        <React.Fragment>
          <StyleBar 
            handleOnClick={this.handleOpenOnClick}
            blackOut={this.blackOut}
            triggerColorChange={this.handleColorChange}
            triggerSizeChange={this.handleSizeChange}
            triggerSpaceChange={this.handleSpaceChange}
            triggerShapeChange={this.handleShapeChange}
            triggerSaveColor={this.handleClickSaveColor}
            randomColor={this.handleRandomColor}
            randomBackgroundColor={this.handleBackgroundRandomColor}
            handleSubmit={this.handleSubmit}
            triggerUndo={this.handleUndo}
            triggerRedo={this.handleRedo}
            triggerColorUndo ={this.handleColorUndo}
            triggerColorRedo ={this.handleColorRedo}
            resetAsk={this.resetAsk}
            size={this.state.size}
            space={this.state.space}
            color={this.state.color}
            palette={this.state.palette}
            display={this.state.display}
            text={this.state.text}
            default={this.state.default}
            backgroundColor={this.state.backgroundColor}
            disabledRedo={this.state.disabledRedo}
            disabledUndo={this.state.disabledUndo}
            colorUndo={this.state.colorUndo}
            colorRedo={this.state.colorRedo}
            width={this.state.width}
            height={this.state.height} 
             />

             <div className={"resetBtn"} style={this.state.resetAsk ? {display: "block", backgroundColor: this.state.backgroundColor, zIndex: "2", position: "absolute", top: window.innerHeight * 0.3 + 'px', left: window.innerWidth * 0.3 + 'px'} : {display: "none"}}>
                  <button onClick={this.exitReset} className={"exitBtn"}> X </button>
                  <p className={"question"} style={{color: this.state.color}}> Would you like to restart? </p>
                  <button onClick={this.resetAll} className={"clickRestart"}> Restart </button>
             </div>
          <DotList 
            triggerPositioning={this.handleDotPosition}
            changeDirectionDown={this.changeDirectionDown}
            changeDirectionUp={this.changeDirectionUp}
            changeDirectionLeft={this.changeDirectionLeft}
            changeDirectionRight={this.changeDirectionRight}
            selectDotFunction={this.selectDot}
            color={this.state.color}
            size={this.state.size}
            space={this.state.space}
            prevSpace={this.state.prevSpace}
            text={this.state.text}
            currentDot={this.indexOfCurrentDot}
            currentDotArray={this.currentDotArray}
            dotDirection={this.dotDirection} 
            selectDot={this.state.selectDot}
            prevIndex={this.indexOfPrevDot} 
            width={this.state.width}
            height={this.state.height}           
            /> 
            
        </React.Fragment>
      ) : (
        <button className="startButton" onClick={this.handleClick} style={{position: "absolute", left: leftButton + 'px', top: window.innerHeight * 0.4, background: "none"}}>
          Start game
        </button>
      )}
        
    </div>
    );
  }
}


export default App;

