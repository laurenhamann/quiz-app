import React from 'react';

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
					color: this.props.color,
					size: this.props.size
					// position: [parseInt(this.d.style.top),
					// 			parseInt(this.d.style.left)
					// 		]
				
				}
			],
			movingLeft: false,
			movingDown: false,
			movingUp: false,
			movingRight: false
		}
		this.handleDotChange = this.handleDotChange.bind(this);
		this.boundaries = this.boundaries.bind(this);
		this.getDotPosition = this.getDotPosition.bind(this);
		this.bottomBarrier = this.bottomBarrier.bind(this);
		this.rightBarrier = this.rightBarrier.bind(this);
		this.moveDot = this.moveDot.bind(this);
		this.leftArrowPressed = this.leftArrowPressed.bind(this);
		this.rightArrowPressed = this.rightArrowPressed.bind(this);
		this.upArrowPressed = this.upArrowPressed.bind(this);
		this.downArrowPressed = this.downArrowPressed.bind(this);
		this.enterPressed = this.enterPressed.bind(this);
		this.curveLeft = this.curveLeft.bind(this);
		this.curveUp = this.curveUp.bind(this);
		this.curveDown = this.curveDown.bind(this);
		this.curveRight = this.curveRight.bind(this);

	}

	componentDidMount() {
		window.addEventListener('keydown', this.moveDot);
		this.getDotPosition();
	}

//CHANGES MADE AS THEY HAPPEN
	componentDidUpdate() {
		this.handleDotChange();
	}

	componentWillUnmount() {
		return;
	}
//STARTING ID FOR DOT ARRAY
	prevDotId = 0;

//ADDING NEW DOT TO THE DOT ARRAY
	handleAddDot = (i) => {
		this.setState( prevState => {
			return {
				dots: [
					...this.state.dots,
					{
						name: "dot",
						id:this.prevDotId += 1,
						animation: true,
						text: ".",
						color: this.props.color,
						size: this.props.size,
						position: [parseInt(this.d.style.top),
								parseInt(this.d.style.left)
							],
						height: this.dotPos.height
					}

				]
			};
		});
        	
		this.getDotPosition();
		this.boundaries();
	}


//CHANGES FROM THE PARENT COMPONENT FOR CURRENT DOT    
	handleDotChange(){
		this.d.style.color = "#" + this.props.color;
		this.d.style.fontSize = this.props.size + 'px';
		this.prevSize = parseInt(this.prevNode.style.fontSize);
		this.fontSize = parseInt(this.d.style.fontSize);
		this.curve = -0.115384615384615;
		this.curveSec = -0.393076923076923;
 		alert(this.dotHeight);
	
// Curving DOT WHEN FONT SIZE INCREASES
		if(this.fontSize > this.prevSize){
			if(this.state.movingLeft && this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
				this.curveLeft();
				this.curveUp();
			}else if(this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
	//MOVES DOT IN WHEN MOVING
					
					this.curveUp();
					this.curveLeft();
				}else if(this.state.movingRight && this.state.movingDown === true){
	//MOVES DOT UP WHEN MOVING RIGHT 
						this.curveUp();
						this.curveLeft();
					}else if(this.state.movingDown === true){
	//MOVES DOT OVER WHEN MOVING DOWN
							this.curveLeft();
							this.curveUp();
							//this.d.style.left = parseInt(this.d.style.left) - 0.3028 + 'px';
						}
		}

//CURVING THE DOT WHEN FONT SIZE DECREASES
		if(this.fontSize < this.prevSize){
			if(this.state.movingLeft && this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
				this.curveRight();
				this.curveDown();
			}else if(this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
	//MOVES DOT IN WHEN MOVING
					this.curveDown();
					this.curveRight();
				}else if(this.state.movingRight && this.state.movingDown === true){
	//MOVES DOT UP WHEN MOVING RIGHT 
						this.curveDown();
						this.curveRight();
					}else if(this.state.movingDown === true){
	//MOVES DOT OVER WHEN MOVING DOWN
							this.curveRight();
							this.curveDown();
							//this.d.style.left = parseInt(this.d.style.left) - 0.3028 + 'px';
						}
		}

		if(this.dotSpace > this.prevDotSpace){
			if(this.state.movingLeft && this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
				this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
	
						this.d.style.top = parseFloat(this.d.style.top) + (this.dotSpace - this.prevDotSpace) + 'px';

				}else if(this.state.movingRight && this.state.movingDown === true){
							this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

					}else if(this.state.movingDown === true){
	//MOVES DOT OVER WHEN MOVING DOWN
							this.d.style.top = parseFloat(this.d.style.top) + (this.dotSpace - this.prevDotSpace) + 'px';
						}
		}

		if(this.dotSpace < this.prevDotSpace){
			if(this.state.movingLeft && this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
				this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
	
						this.d.style.top = parseFloat(this.d.style.top) + (this.dotSpace - this.prevDotSpace) + 'px';

				}else if(this.state.movingRight && this.state.movingDown === true){
							this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

					}else if(this.state.movingDown === true){
	//MOVES DOT OVER WHEN MOVING DOWN
							this.d.style.top = parseFloat(this.d.style.top) + (this.dotSpace - this.prevDotSpace) + 'px';
						}
		}


}


//GETTING THE CURRENT DOT POSITIONING AND SETTING TO REUSABLE VARIABLES	
 	getDotPosition() {
 		this.d = this.dotRef.current;
 		this.dotPos = this.d.getBoundingClientRect();
 		this.prevNode = this.d.previousSibling;
 		this.dotHeight = this.d.offsetHeight;
		this.prevHeight = this.prevNode.offsetHeight;
		this.dotSpace = this.props.space;
		this.prevDotSpace = this.props.prevSpace;
 		this.moveSpaceing = this.dotHeight + this.dotSpace;
 		this.htTripled = this.dotHeight * 3;		
 	}

 	curveLeft(){
 		this.newCurveLeft = parseFloat(this.d.style.left) + (this.curve) + 'px';
		this.d.style.left = this.newCurveLeft;
		console.log(this.newCurveLeft);
 	}

 	curveUp(){
 		this.newCurveUp = parseFloat(this.d.style.top) + (this.curveSec) + 'px';
		this.d.style.top = this.newCurveUp;
		console.log(this.newCurveUp);
 	}

 	curveDown(){
 		this.newCurveDown = parseFloat(this.d.style.top) - (this.curveSec) + 'px';
		this.d.style.top = this.newCurveDown;
 	}

 	curveRight(){
 		this.newCurveRight = parseFloat(this.d.style.left) - (this.curve) + 'px';
		this.d.style.left = this.newCurveRight;
 	}
 	
//MOVING THE DOT AROUND THE BOTTOM PORTION OF THE SCREEN
 	bottomBarrier(){
 		this.d.style.top = this.prevNode.style.top;
		this.d.style.left = parseInt(this.prevNode.style.left) + this.moveSpaceing + 'px';
		this.leftBoundary = parseInt(this.d.style.left);
		this.setState({movingRight: true});

		//CONDITIONAL STATEMENT TO BREAK OUT OF THIS STATEMENT
			if(this.leftBoundary >= this.rightBoundary){
				this.d.style.left = this.prevNode.style.left;
				this.d.style.top = parseInt(this.d.style.top) - this.moveSpaceing + 'px';
			}
 	}

//MOVING THE DOT UP THE RIGHT SIDE OF SCREEN
 	rightBarrier() {
 		this.d.style.left = this.prevNode.style.left;
		this.d.style.top = parseInt(this.prevNode.style.top) - this.moveSpaceing + 'px';
		this.negativeSpaceing = this.moveSpaceing * (-1);
		this.setState({movingUp: true});

//MOVING THE DOT OVER THE TOP OF THE SCREEN
		if(this.topPosition === this.dotStartTop || this.topPosition <= this.dotStartTop){
			this.setState({movingLeft: true});
			this.d.style.top = this.prevNode.style.top;
			this.d.style.left = parseInt(this.d.style.left) - this.moveSpaceing + 'px';
		}
 	}


//THE BOUNDARIES FUNCTION FOR THE SCREEN SIZE
	boundaries(props) {
		//get the outer boundary limits of the Board
			this.board = document.getElementById('board');
			this.windowRect = this.board.getBoundingClientRect();
			this.screenHeight = this.windowRect.height;
			this.screenWidth = this.windowRect.width;

		//moving dot down with spacing and height on enter press
			this.d.style.top = parseFloat(this.prevNode.style.top) + this.moveSpaceing + 'px';
			this.topPosition = parseFloat(this.d.style.top);
			this.d.style.left = this.prevNode.style.left;

		//Bottom Boundary variables
			this.bottomBoundary = this.screenHeight - this.htTripled;

		//RightBoundary variable
			this.rightBoundary = this.screenWidth - (this.dotHeight);

		//Making the width of this element be the same as the height
			this.setState({movingDown: true});

		//CONDITIONAL STATEMENT FOR THE SCREENS BARRIERS
			if(this.topPosition >= this.bottomBoundary){
				this.bottomBarrier();	
     		}else if (this.leftBoundary >= this.rightBoundary){
     			this.rightBarrier();
     		}else{
     			return
     		}
     	
	}

//MOVEMENT FOR LEFT KEY PRESS
	leftArrowPressed() {
		this.moveLeft = parseFloat(this.d.style.left) - this.moveSpaceing + 'px';
		this.d.style.left = this.moveLeft;
		if(parseInt(this.d.style.left) < 0 ){
			this.d.style.left = 0 + 'px';
		}
	}

//MOVEMENT FOR RIGHT KEY PRESS
	rightArrowPressed() {
		this.moveRight = parseFloat(this.d.style.left) + this.moveSpaceing + 'px';
		this.d.style.left = this.moveRight;
		alert(this.moveRight);
		if(parseInt(this.d.style.left) > this.rightBoundary ){
			this.d.style.left = this.rightBoundary + 'px';
		}
	}

//MOVEMENT FOR UP KEY PRESS
	upArrowPressed() {
		this.moveUp = parseInt(this.d.style.top) - this.moveSpaceing + 'px';
		this.d.style.top = this.moveUp;
		if(parseInt(this.d.style.top) < this.dotStartTop ){
			this.d.style.top = this.dotStartTop + 'px';
		}
	}

//MOVEMENT FOR DOWN KEY PRESS
	downArrowPressed() {
		this.moveDown = parseInt(this.d.style.top) + this.moveSpaceing + 'px';
		this.d.style.top = this.moveDown;
		if(parseInt(this.d.style.top) > this.bottomBoundary ){
			this.d.style.top = this.bottomBoundary + 'px';
		}
	}


	
//FUNCTION FOR ADDING NEW DOT FOR ENTER PRESSED
	enterPressed() {
		const newState = this.state.dots.map((dot) => {
    		return {...dot, animation: false};
    	});
    	this.setState({dots: newState});


    	// this.left = parseInt(this.d.style.left);
    	// this.top = parseInt(this.d.style.top);
    	// this.newTopPosition = (this.top);
    	// this.newLeftPosition = (this.left);        	
  			this.handleAddDot();  		
  		}


//THE MOVING DOT EVENT LISTENER
	moveDot(evt) {
		switch (evt.keyCode) {
			case 37:
			this.leftArrowPressed();
			break;

			case 39:
			this.rightArrowPressed();
			break;

			case 38:
			this.upArrowPressed();
			break;

			case 40:
			this.downArrowPressed();
			break;

			case 13:
			this.enterPressed();
		}
	}


	render() {
	//starting the top position to be lower than the header
		this.dotStartTop = window.innerHeight * 0.2;

	//map function for creating a new element
		var dots = this.state.dots;
		var allDots = dots.map((dot, index) => 
			<p ref={this.dotRef} 
			   key={index} 
			   id={index} 
			   className={dot.animation ? 'blink-animation' : 'dot'}
			   style={{position: "absolute", left: "0px", top: this.dotStartTop + 'px', display: "inlineBlock"}}> 
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
