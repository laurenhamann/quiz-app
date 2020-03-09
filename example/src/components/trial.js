import React from 'react';
import classNames from 'classnames';




class Dot extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			id: 1,
			animation: true,
			center: true
		};

		this.addClass = this.addClass.bind(this);
		this.removeClass = this.removeClass.bind(this);
		// this.updatePosition = this.updatePosition.bind(this);
	}

	componentDidMount() {
		// this.updatePosition();
		window.addEventListener('keydown', this.handleKeyPress);

	}

	componentWillUnmount() {
		return;
	}

	addClass() {
		this.setState({
			animation: true
		});
	}

	removeClass() {
		this.setState({
			animation: false
		});
		console.log(document.getElementById('dot').classList);
	}


	

	
	handleKeyPress = (event) => {
  		if(event.key === 'Enter'){
  			this.removeClass();

  		}
	}

	// updatePosition(){
	// 	if(this.state.center = true){
	// 		document.getElementById('dot').classList.add("center-dot");
	// 		console.log(document.getElementById('dot').classList);

	// 	}else{
	// 		return;
	// 	}
	// }

	// removeAnimation() {
	// 	const prevDot = document.getElementsByClassName('blink-animation');
	// 	prevDot.classList.remove("blink-animation");
	// }

	 // createDot() {
	 // 	const dot = document.createElement('h2');
	 // 	document.getElementById('board').appendChild(dot);
	 // 	dot.setAttribute('id', this.id);
	 // 	removeAnimation();

	 // }



	render() {
		return(
					<h1 id="dot" className={classNames("dot", "center-dot", {"blink-animation": this.state.animation})} >
					. 
					
					</h1>

			);
	}

}

Dot.propTypes = {
}

Dot.defaultProps = {
}


export default Dot;
