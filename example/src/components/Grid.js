import React from 'react';
import DotList from './DotList';


class Grid extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			grid:[],
			width: 0,
			height: 0
		}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount(){
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight});
	}


	
	render(){

		return(

          		<DotList />


		);
	}
}

export default Grid;