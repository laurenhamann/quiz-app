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
					text: this.props.text,
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
			movingRight: false,
			hitBottom: false,
			hitRight: false,
			hitTop: false,
			hitLeft: false,
			left: false,
			right: false,
			top: false,
			bottom: false
		}
		this.handleDotChange = this.handleDotChange.bind(this);
		this.moveDot = this.moveDot.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.moveDot);
		this.getDotPosition();
	}

//CHANGES MADE AS THEY HAPPEN
	componentDidUpdate() {
		this.handleDotChange();
		this.updatePosition();
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
						text: this.props.text,
						color: this.props.color,
						size: this.props.size,
						position: [parseFloat(this.d.style.top),
								parseFloat(this.d.style.left)
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
		this.d.style.color = this.props.color;
		this.d.style.fontSize = this.props.size + 'px';
		this.d.innerHTML = this.props.text;
		this.prevSize = parseFloat(this.prevNode.style.fontSize);
		this.fontSize = parseFloat(this.d.style.fontSize);
		this.curve = -0.115384615384615;
		this.curveSec = -0.393076923076923;
		this.dotWidth = this.d.offsetWidth;
		this.moveSpaceing = this.dotWidth + this.dotSpace;
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
				this.curveDown();
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
	//MOVES DOT SPACING WHEN MINUS BUTTON IS CLICKED BY 1
				const spaceBetweenTop = parseFloat(this.d.style.top) - 1 + 'px';
				this.d.style.top = spaceBetweenTop;
			}	
		}
	}

	updatePosition = () => {
		this.screenHeight = window.innerHeight;
		this.screenWidth = window.innerWidth;
		this.leftPosition = parseFloat(this.d.style.left);

		this.topPosition = parseFloat(this.d.style.top);
	}


//GETTING THE CURRENT DOT POSITIONING AND SETTING TO REUSABLE VARIABLES	
 	getDotPosition = () => {
 		this.d = this.dotRef.current;
 		this.dotPos = this.d.getBoundingClientRect();
 		this.prevNode = this.d.previousSibling;
 		this.dotHeight = this.d.offsetHeight;
		this.prevHeight = this.prevNode.offsetHeight;
		this.dotWidth = parseFloat(this.d.offsetWidth);
		this.dotSpace = this.props.space;
		this.prevDotSpace = this.props.prevSpace;
 		this.widthDoubled = this.dotWidth * 2;
 		console.log(this.dotWidth);	
 		console.log(this.moveSpaceing);
 	}

 	curveLeft = () => {
 		this.newCurveLeft = parseFloat(this.d.style.left) + (this.curve) + 'px';
		this.d.style.left = this.newCurveLeft;
 	}

 	curveDown = () =>{

 		this.newCurveDown = parseFloat(this.d.style.top) + (this.curve) + 'px';
		this.d.style.top = this.newCurveDown;
		this.styleBarrier = parseFloat(this.d.style.top) - parseFloat(this.prevNode.style.top);
 	}

 	curveUp = () => {
 		this.newCurveDown = parseFloat(this.d.style.top) - (this.curve) + 'px';
		this.d.style.top = this.newCurveDown;
 	}

 	curveRight = () => {
 		this.newCurveRight = parseFloat(this.d.style.left) - (this.curve) + 'px';
		this.d.style.left = this.newCurveRight;
 	}
 	
//MOVING THE DOT AROUND THE BOTTOM PORTION OF THE SCREEN
 	movingRight = () =>{
 		this.d.style.top = this.prevNode.style.top;
		this.d.style.left = parseFloat(this.prevNode.style.left) + this.moveSpaceing + 'px';
		this.setState({movingRight: true});
 	}

//MOVING THE DOT UP THE LEFT SIDE OF SCREEN 	
 	movingDown = () => {
 		this.d.style.top = parseFloat(this.prevNode.style.top) + this.moveSpaceing + 'px';
		this.d.style.left = this.prevNode.style.left;
		//Making the width of this element be the same as the height
			this.setState({movingDown: true});
 	}

//MOVING THE DOT UP THE RIGHT SIDE OF SCREEN
 	movingUp = () => {
 		this.d.style.left = this.prevNode.style.left;
		this.d.style.top = parseFloat(this.prevNode.style.top) - this.moveSpaceing + 'px';
		this.negativeSpaceing = this.moveSpaceing * (-1);
		this.setState({movingUp: true});
 	}

 	movingLeft = () => {
		this.d.style.top = this.prevNode.style.top;
		this.d.style.left = parseFloat(this.prevNode.style.left) - this.moveSpaceing + 'px';
		this.setState({movingLeft: true});
 	}


//THE BOUNDARIES FUNCTION FOR THE SCREEN SIZE
	boundaries = () => {
			if(this.topPosition >= this.bottomBounds && this.leftPosition <= this.leftBounds){
				this.setState({hitLeft: false});
				this.setState({hitBottom: true});
			}else if(this.leftPosition <= this.leftBounds){
				this.setState({hitLeft: true});
				this.setState({hitTop: false});
			}else if(this.topPosition <= this.topBounds){
				this.setState({hitTop: true});
				this.setState({hitRight: false});
			}else if(this.leftPosition >= this.rightBounds){
				this.setState({hitBottom: false});
				this.setState({hitRight: true});
			}else if(this.topPosition >= this.bottomBounds){
				this.setState({hitBottom: true});
			}

			if(this.state.hitBottom === true){
				this.movingRight();
			}else if (this.state.hitRight === true){
				this.movingUp();
			}else if (this.state.hitTop === true){
				this.movingLeft();
			}else if (this.state.hitLeft === true){
				this.movingDown();
			}else{
				this.movingDown();
			}
	}

	contDirection = () => {
		if(this.state.left === true){
			this.movingLeft();
		}else if(this.state.right === true){
			this.movingRight();
		}else if(this.state.up === true){
			this.movingUp();
		}else if(this.state.down === true){
			this.movingDown();
		}
	}



//MOVEMENT FOR LEFT KEY PRESS
	leftArrowPressed = () => {
		this.moveLeft = parseFloat(this.d.style.left) - this.moveSpaceing + 'px';
		this.d.style.left = this.moveLeft;
		this.setState({left: true,
						right: false,
						up: false,
						down: false});
		if(parseFloat(this.d.style.left) < this.leftBounds ){
			this.d.style.left = this.leftBounds + 'px';
		}
	}

//MOVEMENT FOR RIGHT KEY PRESS
	rightArrowPressed = () => {
		this.moveRight = parseFloat(this.d.style.left) + this.moveSpaceing + 'px';
		this.d.style.left = this.moveRight;
		this.setState({right: true,
						left: false,
						up: false,
						down: false});
		if(parseFloat(this.d.style.left) > this.rightBounds ){
			this.d.style.left = this.rightBounds + 'px';
		}
	}

//MOVEMENT FOR UP KEY PRESS
	upArrowPressed = () => {
		this.moveUp = parseFloat(this.d.style.top) - this.moveSpaceing + 'px';
		this.d.style.top = this.moveUp;
		this.setState({up: true,
						right: false,
						left: false,
						down: false});
		if(parseFloat(this.d.style.top) < this.topBounds ){
			this.d.style.top = this.topBounds + 'px';
		}
	}

//MOVEMENT FOR DOWN KEY PRESS
	downArrowPressed = () => {
		this.moveDown = parseFloat(this.d.style.top) + this.moveSpaceing + 'px';
		this.d.style.top = this.moveDown;
		this.setState({down: true,
						right: false,
						up: false,
						left: false});
		if(parseFloat(this.d.style.top) > this.bottomBounds ){
			this.d.style.top = this.bottomBounds + 'px';
		}
	}


	
//FUNCTION FOR ADDING NEW DOT FOR ENTER PRESSED
	enterPressed = () => {
		const newState = this.state.dots.map((dot) => {
    		return {...dot, animation: false};
    	});
    	this.setState({dots: newState});

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
			this.contDirection();
		}
	}


	render() {
		this.topBounds = window.innerHeight * 0.2;

		this.bottomBounds = window.innerHeight * 0.9;

		this.leftBounds = window.innerWidth * 0.05;

		this.rightBounds = window.innerWidth * 0.9;
	//starting the top position to be lower than the header
		
		this.dotStartTop = window.innerHeight * 0.5;
		this.dotStartLeft = window.innerWidth * 0.5;

	//map function for creating a new element
		var dots = this.state.dots;
		var allDots = dots.map((dot, index) => 
			<p ref={this.dotRef} 
			   key={index} 
			   id={index} 
			   className={dot.animation ? 'blink-animation' : 'dot'}
			   style={{zIndex: "-1", position: "absolute", left: this.dotStartLeft + "px", top: this.dotStartTop + 'px', display: "inlineBlock", fontSize: "24px"}}
			   dangerouslySetInnerHTML={{__html: "&#8226;" }}> 
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