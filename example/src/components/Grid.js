import React from 'react';
import DotList from './DotList';


function Boundaries(props){
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


	return(
		null
	);
}

export default Grid;