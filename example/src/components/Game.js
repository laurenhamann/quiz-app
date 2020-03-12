import React from 'react';
import Grid from './Grid';
import Header from './Header';

class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			background: null,
			width: 0,
			height: 0,
			game: false
		};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight});
	}

	handleClick() {
		this.setState({game: true});
	}

	// handleFontScale() {

	// }




	render(){

		const height = {
			height: this.state.height
		};
		const width = {
			width: this.state.width
		};


		const gameStarted = this.state.game;

		return(<div style={{width: this.state.width, height: this.state.height}} id="board">
			

			{gameStarted ? (
				<React.Fragment>
					<Header />
					<Grid /> 
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



export default Game;