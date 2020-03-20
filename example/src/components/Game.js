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
			size: 24,
			space: 1,
			prevSpace: 1,
			text: "&#8226;",
			palette:[]
		};
		this.handleClickSaveColor = this.handleClickSaveColor.bind(this);
		this.handleRandomColor = this.handleRandomColor.bind(this);
		this.handleShapeChange = this.handleShapeChange.bind(this);
		this.handleSpaceChange = this.handleSpaceChange.bind(this);
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
		this.setState({color: event.target.value });
	}

	handleRandomColor(event){
		this.randomColor = this.props.colors[Math.floor(this.props.colors.length * Math.random())];
		this.setState({color: this.randomColor});
	}

	handleClickSaveColor = (i) => {
		this.setState( prevState => {
			return {
				palette: [
					...this.state.palette,
						{color: this.state.color}
					
				]
			};
		});
		console.log(this.state.palette);
	}

	handleSizeChange(event){
		if(event.target.name === 'add'){
			this.setState(prevState => ({
				size: prevState.size + 1
			}));
		}else{
			this.setState(prevState => ({
				size: prevState.size - 1
			}));
			if(this.state.size === 12){
				this.setState({size: 12});
			}
		}
	}

	handleShapeChange(event){
		this.setState({text: event.target.value});
	}

	handleSpaceChange(event){

		if(event.target.name === 'addSpace'){
			this.setState(prevState => ({
				space: prevState.space + 1,
				prevSpace: prevState.space
			}));
		}else{
			this.setState(prevState => ({
				space: prevState.space - 1,
				prevSpace: prevState.space
			}));
			if(this.state.space === 0){
				this.setState({space: 0});
			}
		}
	}




	render(){
		const gameStarted = this.state.game;
		const newColor = this.state.color;
		const newSize = this.state.size;
		const newSpace = this.state.space;
		const prevStateSpace = this.state.prevSpace;
		const palette = this.state.palette;

		return(<div style={{width: this.state.width, height: this.state.height}} id="board">
			

			{gameStarted ? (
				<React.Fragment>
					<div className="Header">
					<StyleBar 
						randomColor={this.handleRandomColor}
						triggerColorChange={this.handleColorChange}
						triggerSizeChange={this.handleSizeChange}
						triggerSpaceChange={this.handleSpaceChange}
						triggerShapeChange={this.handleShapeChange}
						triggerSaveColor={this.handleClickSaveColor}
						size={newSize}
						space={newSpace}
						color={newColor}
						palette={palette}
						text={this.props.text} />
						<TopBar />
					</div>
					<DotList 
						color={newColor}
						size={newSize}
						space={newSpace}
						prevSpace={prevStateSpace}
						text={this.state.text} /> 
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