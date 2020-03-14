import React from 'react';

class StyleBar extends React.Component{
	constructor(props){
		super(props);
		this.state={
			display: false,
			color: '#000',
			size: '64px',
			shape: '.',
			spacing: '1px'
		}
		//this.handleChange = this.handleChange.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// handleChange(event) {
	// 	this.setState({color: event.target.color});
	// }

	handleOnClick(event){
		this.setState({display: !this.state.display});
	}

	handleSubmit(event){
		event.preventDefault();
	}

	render(){
		return(
			<React.Fragment>
				<aside className="style-bar">
				{window.innerWidth > 700 
						? 
				<h2 onClick={this.handleOnClick} style={{top: '0px', left: window.innerWidth - 30 + 'px'}}> Style Bar </h2>
						:
				<h2 onClick={this.handleOnClick} style={{top: '0px', left: window.innerWidth - 30 + 'px'}}> + </h2> }
					<form style={this.state.display ? {display: "block", width: "10%"} : {display: "none"}} onSubmit={this.handleSubmit}>
						<label>
						Color:
							<input type="text" defaultValue={this.state.color} onChange={this.props.triggerColorChange} />
						</label>
						<label className="sizeStyle">
						Size:
							<button name="sub" className="subtractBtn" onClick={this.props.triggerSizeChange}> - </button> {this.props.size} <button name="add" className="additionBtn" onClick={this.props.triggerSizeChange}>+</button>
						</label>
					</form>

				</aside>
			</React.Fragment>
		);
	}
}

export default StyleBar;