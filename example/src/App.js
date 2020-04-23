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
      clickCountPalette: 1,
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
      createPalette: false,
      compColorPalette: ["#63b598",
                        "#b56380"],
      colorPalettes:[{
            mint:[{ 
            palette: ["#F8C7CC", 
                    "#63B598",
                    "#57886C",
                    "#466060",
                    "#0e0f19"]},
            {palette: [ "#e56399",
                        "#63B598",
                        "#d3a588",
                        "#ece2d0",
                        "#7a6563" ]},
            {palette: ["#6da34d",
                        "#63B598",
                        "#56445d",
                        "#548687",
                        "#c5e99b"]},
            {palette: ["#63b598",
                        "#b56380"]
            }],
      }],
      //Style Bar State
      display: false,
      color: "#000000",
      size: 24,
      space: 1,
      prevSpace: 1,
      text: "&#8226;",
      palette:[],
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
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDotPosition = this.handleDotPosition.bind(this);
    this.changeDirectionUp = this.changeDirectionUp.bind(this);
    this.changeDirectionDown = this.changeDirectionDown.bind(this);
    this.changeDirectionLeft = this.changeDirectionLeft.bind(this);
    this.changeDirectionRight = this.changeDirectionRight.bind(this);
    this.handleCreatePalette = this.handleCreatePalette.bind(this);
    this.selectDot = this.selectDot.bind(this);
    this.enter = this.enter.bind(this);
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
    this.createPalette = this.createPalette.bind(this);
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
    this.prevIndex = this.state.selectedDots;
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
    this.createPalette();
  }


  createPalette() {
      this.setState({
        createPalette: true
      });
  }

  handleCreatePalette() {
    const color = this.state.color;
    if(color){

      const colorPalette = this.state.colorPalettes;
      const current = colorPalette[colorPalette.length - 1];
      const colorIndex = colorPalette.indexOf(current);
      const genPalette = colorPalette[colorIndex].mint;
      const clickCountPalette = this.state.clickCountPalette;
      const currentColorPalette = genPalette[genPalette.length - clickCountPalette];
      const paletteIndex = genPalette.indexOf(currentColorPalette);
      const generate = colorPalette[colorIndex].mint[paletteIndex].palette;
      this.setState({
        compColorPalette: generate,
        clickCountPalette: clickCountPalette + 1,
      });
      if(clickCountPalette === genPalette.length){
        this.setState({
          clickCountPalette: 1
        });
      }
      console.log(generate);
    }
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

      if(this.index < 2) {
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
      console.log(color);
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


    const indexPrev = this.prevIndex;
    const color = history[lastObjAdded].dots[indexPrev].color;
    const text = history[lastObjAdded].dots[indexPrev].text;
    const size = history[lastObjAdded].dots[indexPrev].size;
    const space = history[lastObjAdded].dots[indexPrev].space;
        history[lastObjAdded].dots[this.indexOfDot].animation = false;
    this.setState({
              history: history.concat([{
                        dots: valueOfDot
                    }]),
              redoIndex: redoIndex + 2,
              redoCount: redoCount + 1
              
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
    console.log(color);
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

  resetAll(){
    alert('Would you like to reset the game?');
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
    this.createPalette();
  }

//EVENT FOR BUTTON IN STYLEBAR TO CHANGE DOT TO RANDOMCOLOR
  handleRandomColor(event){
    this.randomColor = this.state.colors[Math.floor(this.state.colors.length * Math.random())];
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const hisIndex = history.indexOf(current);
    const color = this.state.color;
      history[hisIndex].dots[this.indexOfDot].prevColor = history[hisIndex].dots[this.indexOfDot].prevColor.concat([{
          prevColor: color
        }]);
      history[hisIndex].dots[this.indexOfDot].color = this.randomColor;
    this.setState({ history: history,
                    color: this.randomColor,
                    colorUndo: true});
    this.createPalette();
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
    const randomColor = this.state.colors[Math.floor(this.state.colors.length * Math.random())];
    this.setState({ default: false,
                    backgroundColor: randomColor});
  }
//Blackout Feature 
  blackOut() {
    this.setState(prevState => ({default: !prevState.default}));
    if(this.state.default === false){
      this.setState({backgroundColor: "#ffffff",
                      color: "#000000"})
    }else if(this.state.default){
      this.setState({backgroundColor: "#000000",
                      color: "#ffffff"})
    }
  }



  render(){
    this.getSelectedDot();

  //Setting Left position for start button
    const halfWidth = window.innerWidth / 2;
    const leftButton = halfWidth - 104.6485;

  //Getting current previous index of dots
    this.getCurrAndPrevDotIndex();

    return(<div style={{width: this.state.width, height: this.state.height, backgroundColor: this.state.backgroundColor}} id="board">
      

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
            resetAll={this.resetAll}
            size={this.state.size}
            space={this.state.space}
            color={this.state.color}
            palette={this.state.palette}
            display={this.state.display}
            text={this.state.text}
            createPalette={this.state.createPalette}
            triggerCompColor={this.handleCreatePalette}
            compColorPalette={this.state.compColorPalette}
            default={this.state.default}
            backgroundColor={this.state.backgroundColor}
            disabledRedo={this.state.disabledRedo}
            disabledUndo={this.state.disabledUndo}
            colorUndo={this.state.colorUndo}
            colorRedo={this.state.colorRedo}
            width={this.state.width}
            height={this.state.height} 
             />
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
        
        <button className="startButton" onClick={this.handleClick} style={{position: "absolute", left: leftButton + 'px', top: window.innerHeight * 0.4}}>
          Start game
        </button>
      )}
        
    </div>
    );
  }
}


export default App;

