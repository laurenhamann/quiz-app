import React from 'react';
import Aside from './Aside';

class DotList extends React.Component {
	constructor(props){
		super(props);
		this.dotRef = React.createRef();
		this.state = {
			dots: [
				{
					name: "dot",
					id:0,
					animation: true,
					text: ".",
					position: ""
				
				}
			]
		};
		this.addDot = this.addDot.bind(this);
		this.boundaries = this.boundaries.bind(this);
		this.updateId = this.updateId.bind(this);
		this.getDotPosition = this.getDotPosition.bind(this);
		this.bottomBarrier = this.bottomBarrier.bind(this);
		this.rightBarrier = this.rightBarrier.bind(this);
		this.changePosition = this.changePosition.bind(this);
	}
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
		this.updateId();
		this.getDotPosition();
		this.setState({
 			height: this.dotHeight
 		});
	}

	componentWillUnmount() {
		return;
	}

	

	renderDot(i) {
		// this.positionLeft = parseInt(this.dotRef.style.left);
		// this.positionTop = parseInt(this.dotRef.style.top);
		var newDot = {
			name: "dot",
			id:0,
			animation: true,
			text: ".",
			// position: [this.positionLeft,
			// this.positionTop],
			top: 0,
			height: ""
		};
		
        

		this.setState((prevState) => {
			return {
				dots: prevState.dots.concat(newDot)
			};

		});
		this.getDotPosition();
		this.boundaries();

	}
    
    updateId(){
    	const newId = this.state.dots.map((dot, index) => {
    		return {...dot, id: index};
    	});
    	this.setState({dots: newId});
    }
	
 	getDotPosition() {
 		this.d = this.dotRef.current;
 		this.dotPos = this.d.getBoundingClientRect();
 		this.dotHeight = this.dotPos.height;
 		this.prevNode = this.d.previousSibling;
 		this.dotSpace = 1;
 		this.moveSpaceing = this.dotHeight + this.dotSpace;
 		this.htTripled = this.dotHeight * 3;
 		this.d.style.left = this.dotSpace + 'px';
 	}

 	bottomBarrier(){
 		this.d.style.top = this.prevNode.style.top;
		this.d.style.left = parseInt(this.prevNode.style.left) + this.moveSpaceing + 'px';
		//CONDITIONAL STATEMENT TO BREAK OUT OF THIS STATEMENT
			if(this.leftBoundary >= this.rightBoundary){
				alert(this.topPosition);
				this.d.style.left = this.prevNode.style.left;
				this.d.style.top = parseInt(this.d.style.top) - this.moveSpaceing + 'px';
			}
 	}

 	rightBarrier() {
 		this.d.style.left = this.prevNode.style.left;
		this.d.style.top = parseInt(this.prevNode.style.top) - this.moveSpaceing + 'px';
		this.negativeSpaceing = this.moveSpaceing * (-1);
		if(this.topPosition === this.moveSpaceing || this.topPosition <= this.moveSpaceing){
			alert(this.topPosition);
			this.d.style.top = this.prevNode.style.top;
			this.d.style.left = parseInt(this.d.style.left) - this.moveSpaceing + 'px';

		}
 	}

 	changePosition(i){
 		const dots = this.state.dots.slice();
 		console.log(dots);
		const newPosition = this.state.dots.map((dot) => {
			return {...dot, position: [this.topPosition,
				this.leftBoundary]};
		});
		this.setState({dots: newPosition});
 	}

 	


	boundaries(props) {
		//get the outer boundary limits of the Board
			this.board = document.getElementById('board');
			this.windowRect = this.board.getBoundingClientRect();
			this.screenHeight = this.windowRect.height;
			this.screenWidth = this.windowRect.width;

		//moving dot down with spacing and height on enter press
			this.d.style.top = parseInt(this.prevNode.style.top) + this.moveSpaceing + 'px';
			this.topPosition = parseInt(this.d.style.top);

			this.leftBoundary = parseInt(this.d.style.left);

		//Bottom Boundary variables
			this.bottomBoundary = this.screenHeight - this.htTripled;

		//RightBoundary variable
			this.rightBoundary = this.screenWidth - (this.dotHeight);

		//Making the width of this element be the same as the height
			this.d.style.width = this.dotHeight + 'px';


		//CONDITIONAL STATEMENT FOR THE BOTTOM OF SCREEN
			if(this.topPosition >= this.bottomBoundary){
				alert(this.topPosition);
				this.bottomBarrier();	
     		}else if (this.leftBoundary >= this.rightBoundary){
     			alert(this.topPosition);
     			this.rightBarrier();
     		}
     	//CONDITIONAL STATEMENT FOR THE RIGHT SIDE OF SCREEN
			// if(this.leftBoundary >= rightBoundary){
			// 	alert('In the second if');
			// 	this.d.style.left = this.prevNode.style.left;
			// 	this.d.style.top = this.moveSpaceing + 'px';

			// }
     			
     				
     		// }else{
     			
     	
   			
    		
		



		// const topPos = d.current.getBoundingClientRect();
		// const getCurrentDot = this.state.dots.id;
		// console.log(this.state.dots);
  //       const newPosition = this.state.dots.map((dot) => {
  //   		return {...dot, position: topPos};
  //   	});
  //   	this.setState({dots: newPosition});

	// boundaries() {
	// 	const d = this.dotRef;
	// 	const topPos = d.current.getBoundingClientRect();
	// 	console.log(this.state.id);
 //        this.setState(prevState => ({
 //  				dots: this.state.dots.map(
 //  					obj => (obj.id === this.state.id ? Object.assign(obj, {position: topPos}): obj)
 //  				)
 //  			}));
	 }



	handleKeyPress = (event) => {
  		if(event.key === 'Enter'){
  			//this.state.dots.slice();
  			const newState = this.state.dots.map((dot) => {
    		return {...dot, animation: false};
    	});
    	this.setState({dots: newState});
  			this.addDot();
  			this.updateId();
  		
  		}
	}

	render() {
		

		var dots = this.state.dots;
		var allDots = dots.map((dot, index) => 
			<p ref={this.dotRef} 
			   key={index} 
			   id={index} 
			   className={dot.animation ? 'blink-animation' : 'dot'}
			   style={{position: "absolute", left: "0px", top: "0px", display: "inlineBlock"}}> 
			   	{dot.text} 
			</p>
		);
		return (
			<React.Fragment>
				{allDots}
			    
			</React.Fragment>
		 );

	}
}



export default DotList;
