import React from 'react';

class Dot extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: "dot",
			id: 0,
			animation: true,
			text: ".",
			top: 0,
			height: ""
		};
	}

	componentDidMount() {
		this.updateId();
		this.setState({
 			height: this.dotHeight
 		});
	}

	componentWillUnmount() {
		return;
	}

	 updateId(index){
    	this.setState({this.state.id :{index}});
    }
}