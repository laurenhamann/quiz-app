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
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	

	handleSubmit(event){
		event.preventDefault();
	}



	render(){
		const palette = this.props.palette;
		const paletteDiv = palette.map((palette, index) =>
			<button key={index} 
				style={{backgroundColor: palette.color, width: "10px", height:"10px", borderRadius: "50px"}}
				onClick={this.props.triggerColorChange}
				value={palette.color} />


		)
		return(
			<React.Fragment>
				<aside className="style-bar">
				{window.innerWidth > 700 
						? 
				<h2 onClick={this.props.handleOnClick} style={{top: '0px', left: window.innerWidth - 30 + 'px'}}> Style Bar </h2>
						:
				<h2 onClick={this.props.handleOnClick} style={{top: '0px', left: window.innerWidth - 30 + 'px'}}> + </h2> }
					<form style={this.props.display ? {display: "block", width: "45%"} : {display: "none", width: "10%"}} onSubmit={this.handleSubmit}>
						<label>
						Color:
							<input type="text" defaultValue={this.props.color} onChange={this.props.triggerColorChange} /><br />
							<input name="Color Picker" type="color" defaultValue={this.state.color} onChange={this.props.triggerColorChange} /><br />
							<button className="randomColor" onClick={this.props.randomColor} style={{backgroundColor: this.props.color}} value={this.props.color}> Random Color </button>
							<button className="save" onClick={this.props.triggerSaveColor} value={this.props.color}> Save </button>
							<br />{paletteDiv}


						</label>
						<label className="sizeStyle">
						Size:
							<button name="sub" className="subtractBtn" onClick={this.props.triggerSizeChange}> - </button> {this.props.size} <button name="add" className="additionBtn" onClick={this.props.triggerSizeChange}>+</button>
						</label>
						<label className="spaceStyle">
						Spacing:
							<button name="subSpace" className="subtractBtn" onClick={this.props.triggerSpaceChange}> - </button> {this.props.space} <button name="addSpace" className="additionBtn" onClick={this.props.triggerSpaceChange}>+</button>
						</label>
						<label className="spaceStyle">
						Shapes:
							<select value={this.props.text} onChange={this.props.triggerShapeChange}>
								<option name="dot" value="&#8226;"> &#8226;</option>
								<option name="heart" value="&#9829;"> &#9829;</option>
								<option name="right arrow" value="&#8250;"> &#8250;</option>
								<option name="up arrow" value="&#8657;"> &#8657;</option>
								<option name="diamond" value="&#9830;"> &#9830;</option>
								<option name="club" value="&#9827;"> &#9827;</option>
								<option name="shape" value="&#9824;"> &#9824;</option>
								<option name="diamond outline" value="&#9674;"> &#9674;</option>
							</select>
							<input type="text" defaultValue={this.state.text} onChange={this.props.triggerShapeChange} />

						</label>
					</form>

				</aside>
			</React.Fragment>
		);
	}
}

export default StyleBar;