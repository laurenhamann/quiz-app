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
					text: "."
					// position: [parseInt(this.d.style.top),
					// 			parseInt(this.d.style.left)
					// 		]
				
				}
			]
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

	}
	componentDidMount() {
		window.addEventListener('keydown', this.moveDot);
		this.getDotPosition();
	}

	componentWillUnmount() {
		return;
	}

	prevDotId = 0;

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
        	
        console.log('it worked');
		this.getDotPosition();
		this.boundaries();
		this.handleDotChange();

	}
    
	handleDotChange(){
		this.d.style.color = "#" + this.props.color;
		this.d.style.fontSize = this.props.size + 'px';

	}
	
 	getDotPosition() {
 		this.d = this.dotRef.current;
 		this.dotPos = this.d.getBoundingClientRect();
 		this.dotHeight = this.dotPos.height;
 		this.prevNode = this.d.previousSibling;
 		this.dotSpace = 1;
 		this.moveSpaceing = this.dotHeight + this.dotSpace;
 		this.htTripled = this.dotHeight * 3;
 		
 	}

 	

 	bottomBarrier(){
 		this.d.style.top = this.prevNode.style.top;
		this.d.style.left = parseInt(this.prevNode.style.left) + this.moveSpaceing + 'px';
		this.leftBoundary = parseInt(this.d.style.left);

		//CONDITIONAL STATEMENT TO BREAK OUT OF THIS STATEMENT
			if(this.leftBoundary >= this.rightBoundary){
				alert('in the second if');
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

	boundaries(props) {
		//get the outer boundary limits of the Board
			this.board = document.getElementById('board');
			this.windowRect = this.board.getBoundingClientRect();
			this.screenHeight = this.windowRect.height;
			this.screenWidth = this.windowRect.width;

		//moving dot down with spacing and height on enter press
			this.d.style.top = parseInt(this.prevNode.style.top) + this.moveSpaceing + 'px';
			this.topPosition = parseInt(this.d.style.top);
			this.d.style.left = this.prevNode.style.left;

		//Bottom Boundary variables
			this.bottomBoundary = this.screenHeight - this.htTripled;

		//RightBoundary variable
			this.rightBoundary = this.screenWidth - (this.dotHeight);

		//Making the width of this element be the same as the height
			this.d.style.width = this.dotHeight + 'px';


		//CONDITIONAL STATEMENT FOR THE BOTTOM OF SCREEN
			if(this.topPosition >= this.bottomBoundary){
				alert(this.leftBoundary);
				this.bottomBarrier();	
     		}else if (this.leftBoundary >= this.rightBoundary){
     			alert('second if');
     			this.rightBarrier();
     		}else{
     			return
     		}
     	
	}

	leftArrowPressed() {
		this.moveLeft = parseInt(this.d.style.left) - this.moveSpaceing + 'px';
		this.d.style.left = this.moveLeft;
		if(parseInt(this.d.style.left) < 0 ){
			this.d.style.left = 0 + 'px';
		}
	}

	rightArrowPressed() {
		this.moveRight = parseInt(this.d.style.left) + this.moveSpaceing + 'px';
		this.d.style.left = this.moveRight;
		if(parseInt(this.d.style.left) > this.rightBoundary ){
			this.d.style.left = this.rightBoundary + 'px';
		}
	}

	upArrowPressed() {
		this.moveUp = parseInt(this.d.style.top) - this.moveSpaceing + 'px';
		this.d.style.top = this.moveUp;
		if(parseInt(this.d.style.top) < this.dotStartTop ){
			this.d.style.top = this.dotStartTop + 'px';
		}
	}

	downArrowPressed() {
		this.moveDown = parseInt(this.d.style.top) + this.moveSpaceing + 'px';
		this.d.style.top = this.moveDown;
		if(parseInt(this.d.style.top) > this.bottomBoundary ){
			this.d.style.top = this.bottomBoundary + 'px';
		}
	}


	

	enterPressed() {
		const newState = this.state.dots.map((dot) => {
    		return {...dot, animation: false};
    	});
    	this.setState({dots: newState});


    	this.left = parseInt(this.d.style.left);
    	this.top = parseInt(this.d.style.top);
    	this.newTopPosition = (this.top);
    	this.newLeftPosition = (this.left);        	
  			this.handleAddDot();  		
  		}


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

		
		this.dotStartTop = window.innerHeight * 0.2;

		var dots = this.state.dots;
		var allDots = dots.map((dot, index) => 
			<p ref={this.dotRef} 
			   key={index} 
			   id={index} 
			   className={dot.animation ? 'blink-animation' : 'dot'}
			   style={{position: "absolute", left: "0px", top: this.dotStartTop + 'px', display: "inlineBlock"}}
			   onChange={this.handleDotChange}> 
			   	{dot.text}
			</p>
		);
		//this.handleDotChange();
		return (
			<React.Fragment>
				{allDots}
			</React.Fragment>
		 );

	}
}



export default DotList;
