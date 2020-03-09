import React from 'react';
import DotList from './DotList';

class Board extends React.Component{
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



	render(){

		const height = {
			height: this.state.height
		};
		const width = {
			width: this.state.width
		};
		const divSize = {
			Width: this.state.width,
			Height: this.state.height
		};

		const gameStarted = this.state.game;

		return(<div style={{width: this.state.width, height: this.state.height}} id="board">
			

			{gameStarted ? (
				<DotList  height={height} width={width}/> 
			) : (
				
				<button onClick={this.handleClick}>
					Start game
				</button>
			)}
				
		</div>
		);
	}
}



export default Board;