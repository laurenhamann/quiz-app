import React from 'react';
import DotList from './DotList';
import StyleBar from './StyleBar';
import TopBar from './TopBar';

class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			background: null,
			width: 0,
			height: 0,
			game: false,
			color: "",
			size: 64
		};
		this.handleSizeChange = this.handleSizeChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
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

	handleColorChange(event) {
		console.log('it ran');
		this.setState({color: event.target.value });
	}

	handleSizeChange(event){
		console.log('it worked');
		if(event.target.name === 'add'){
			this.setState(prevState => ({
				size: prevState.size + 1
			}));
		}else{
			this.setState(prevState => ({
				size: prevState.size - 1
			}));
		}
	}





	render(){

		const gameStarted = this.state.game;
		const newColor = this.state.color;
		const newSize = this.state.size;

		return(<div style={{width: this.state.width, height: this.state.height}} id="board">
			

			{gameStarted ? (
				<React.Fragment>
					<div className="Header">
					<StyleBar 
						triggerColorChange={this.handleColorChange}
						triggerSizeChange={this.handleSizeChange}
						size={this.state.size} />
						<TopBar />
					</div>
					<DotList 
						color={newColor}
						size={newSize} /> 
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