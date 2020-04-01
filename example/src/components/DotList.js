import React from 'react';
import Dot from './Dot';

class DotList extends React.Component {
	constructor(props){
		super(props);
		this.dotRef = React.createRef();
		this.state = {
			hitBottom: false,
			hitRight: false,
			hitTop: false,
			hitLeft: false,
			left: false,
			right: false,
			top: false,
			bottom: false,
			currWidth: "",
			prevWidth: ""
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
		this.current = this.dotRef.current;
 		this.d = this.current.lastElementChild;
 		this.props.triggerPositioning();
	}

	componentWillUnmount() {
		return;
	}


//CHANGES FROM THE PARENT COMPONENT FOR CURRENT DOT    
	handleDotChange(){
		this.d.style.color = this.props.color;
		this.d.style.fontSize = this.props.size + 'px';
		this.d.innerHTML = this.props.text;
		this.prevSize = parseFloat(this.prevNode.style.fontSize);
		this.fontSize = parseFloat(this.d.style.fontSize);
		this.curveDot = 0.203;
		this.curveLtArrow= 0.203;
		this.curveHeart = 0.383;
		this.curveUpArrow = 0.4295;
		this.curveDiamond = 0.336;
		this.curveClub = 0.3825;
		this.curveSpade = 0.3675;
		this.curveDiamondTwo = 0.266;
		this.dotSpace = this.props.space;
		this.prevDotSpace = this.props.prevSpace;
		this.dotWidth = parseFloat(this.d.offsetWidth);
		this.moveSpaceing = this.dotWidth + this.dotSpace;
		this.dWidth = this.d.getBoundingClientRect().width;
		this.prevWidth = this.prevNode.getBoundingClientRect().width;
 		this.newCurve = (this.dWidth - this.prevWidth) / 2;

		if(this.dotSpace > this.prevDotSpace){
			if(this.state.left === true){
				this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.up === true){
	
				this.d.style.top = parseFloat(this.d.style.top) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.right === true){
				this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.down === true){
	//MOVES DOT OVER WHEN MOVING DOWN
				this.d.style.top = parseFloat(this.d.style.top) + (this.dotSpace - this.prevDotSpace) + 'px';
			}
		}

		if(this.dotSpace < this.prevDotSpace){
			if(this.state.left === true){
				this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.up === true){
	
				this.d.style.top = parseFloat(this.d.style.top) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.right === true){
				this.d.style.left = parseFloat(this.d.style.left) + (this.dotSpace - this.prevDotSpace) + 'px';

			}else if(this.state.down === true){
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
 		this.current = this.dotRef.current;
 		this.d = this.current.lastChild;
 		this.prevNode = this.d.previousSibling === null ? this.d : this.d.previousSibling;
 		this.dotHeight = this.d.offsetHeight;
		this.prevHeight = this.prevNode.offsetHeight;
 		this.widthDoubled = this.dotWidth * 2;

 		this.fontChanges();
 	}

 	fontChanges = () => {
 // Curving DOT WHEN FONT SIZE INCREASES
		if(this.fontSize > this.prevSize){
			if(this.state.up === true){
				this.curveLeft();
				this.curveUp();
			}else if(this.state.left === true){
	//MOVES DOT IN WHEN MOVING
				this.curveUp();
				this.curveLeft();
			}else if(this.state.right === true){
	//MOVES DOT UP WHEN MOVING RIGHT 
				this.curveUp();
				this.curveLeft();
			}else if(this.state.down === true){
	//MOVES DOT OVER WHEN MOVING DOWN
				this.curveLeft();
				this.curveUp();
			}			
		}


		//CURVING THE DOT WHEN FONT SIZE DECREASES
		if(this.fontSize < this.prevSize){
			if(this.state.left && this.state.movingUp && this.state.movingRight && this.state.movingDown === true){
				this.curveRight();
				this.curveDown();
			}else if(this.state.up && this.state.movingRight && this.state.movingDown === true){
	//MOVES DOT IN WHEN MOVING
				this.curveDown();
				this.curveRight();
			}else if(this.state.right && this.state.movingDown === true){
	//MOVES DOT UP WHEN MOVING RIGHT 
				this.curveDown();
				this.curveRight();
			}else if(this.state.down === true){
	//MOVES DOT OVER WHEN MOVING DOWN
				this.curveRight();
				this.curveDown();
			//this.d.style.left = parseInt(this.d.style.left) - 0.3028 + 'px';
			}
		}
 	}
 	
 	curveLeft = () => {
 		this.prevNode.style.left = this.leftPosition - this.newCurve + 'px';
 		
 	}

 	curveUp = () => {
 		this.prevNode.style.top = (this.topPosition - this.newCurve) + this.dotSpace + 'px';
 	}

 	curveRight = () => {
 		this.prevNode.style.left = this.leftPosition - this.newCurve + 'px';
 		
 	}

 	curveDown = () => {
 		this.prevNode.style.top = (this.topPosition - this.newCurve) - this.dotSpace + 'px';
 	}

 	
//MOVING THE DOT AROUND THE BOTTOM PORTION OF THE SCREEN
 	movingRight = () =>{
 		this.d.style.top = this.prevNode.style.top;
		this.d.style.left = parseFloat(this.prevNode.style.left) + this.moveSpaceing + 'px';
		this.setState({right: true});
		if(this.leftPosition >= this.rightBounds ){
			this.setState({right: false,
							hitRight: true,
							hitBottom:false});
		}
 	}

//MOVING THE DOT UP THE LEFT SIDE OF SCREEN 	
 	movingDown = () => {
 		this.d.style.top = parseFloat(this.prevNode.style.top) + this.moveSpaceing + 'px';
		this.d.style.left = this.prevNode.style.left;
			this.setState({down: true});
		if(this.topPosition >= this.bottomBounds ){
			this.setState({down: false,
							hitBottom: true});
		}
 	}

//MOVING THE DOT UP THE RIGHT SIDE OF SCREEN
 	movingUp = () => {
 		this.d.style.left = this.prevNode.style.left;
		this.d.style.top = parseFloat(this.prevNode.style.top) - this.moveSpaceing + 'px';
		this.negativeSpaceing = this.moveSpaceing * (-1);
		this.setState({up: true});
		if(this.topPosition <= this.topBounds ){
			this.setState({up: false,
						   hitTop: true,
						   hitRight: false});
		}
 	}

 	movingLeft = () => {
		this.d.style.top = this.prevNode.style.top;
		this.d.style.left = parseFloat(this.prevNode.style.left) - this.moveSpaceing + 'px';
		this.setState({left: true});
		if(this.leftPosition <= this.leftBounds ){
			this.setState({	left: false,
						   	hitLeft: true,
							hitTop: false});
		}
 	}


//THE BOUNDARIES FUNCTION FOR THE SCREEN SIZE
	boundaries = () => {
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
		}else{
			this.boundaries();
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
		if(this.leftPosition < this.leftBounds ){
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
		if(this.leftPosition > this.rightBounds ){
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
		if(this.topPosition < this.topBounds ){
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
		if(this.topPosition > this.bottomBounds ){
			this.d.style.top = this.bottomBounds + 'px';
		}
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
			this.getDotPosition();
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
		
		var dots = this.props.dots;
		var allDots = dots.map((dot, index) => 
			<Dot 
				key={index}
				id={index}
				className={dot.animation}
				left={dot.left}
				top={dot.top}
			/>
		);
		return (
			<div id={"dotList"} ref={this.dotRef}>
				{allDots}
			</div>
		 );

	}
}



export default DotList;