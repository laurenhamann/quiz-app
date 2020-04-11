import React from 'react';


function StyleBar(props){
	const palette = props.palette;
	const paletteDiv = palette.map((palette, index) =>
		<button key={index} 
			style={{backgroundColor: palette.color, width: "10px", height:"10px", borderRadius: "50px"}}
			onClick={props.triggerColorChange}
			value={palette.color} />
	)
	return(
		<React.Fragment>
			<aside className={props.display ? "styleBarBackgroundColor" : "stylebar"}>
			{window.innerWidth > 700 
					? 
			<h2 onClick={props.handleOnClick} style={props.display ? {color: "#000", top: '0px', left: window.innerWidth - 30 + 'px'} : {top: '0px', left: window.innerWidth - 30 + 'px'}} className={props.default ? "style" : "blackOutStyleBar"}> Style Bar </h2>
					:
			<h2 onClick={props.handleOnClick} style={props.display ? {color: "#000", top: '0px', left: window.innerWidth - 30 + 'px'} : {top: '0px', left: window.innerWidth - 30 + 'px'}} className={props.default ? "style" : "blackOutStyleBar"}> + </h2> }
				<form style={props.display ? {display: "block", width: "45%"} : {display: "none", width: "10%"}} onSubmit={props.handleSubmit} className="style-bar">
					<label>
					Color:
						<input type="text" value={props.color} onChange={props.triggerColorChange} /><br />
						<input name="Color Picker" type="color" defaultValue={props.color} onChange={props.triggerColorChange} /><br />
						<button className="randomColor" onClick={props.randomColor} style={{backgroundColor: props.color, color: props.backgroundColor}} value={props.color}> Random Color </button>
						<button className="save" onClick={props.triggerSaveColor} value={props.color}> Save </button>
						<br />{paletteDiv}


					</label>
					<label className="sizeStyle">
					Size:
						<button name="sub" className="subtractBtn" onClick={props.triggerSizeChange}> - </button> {props.size} <button name="add" className="additionBtn" onClick={props.triggerSizeChange}>+</button>
					</label>
					<label className="spaceStyle">
					Spacing:
						<button name="subSpace" className="subtractBtn" onClick={props.triggerSpaceChange}> - </button> {props.space} <button name="addSpace" className="additionBtn" onClick={props.triggerSpaceChange}>+</button>
					</label>
					<label className="spaceStyle">
					Shapes:
						<select value={props.text} onChange={props.triggerShapeChange}>
							<option name="dot" value="&#8226;"> &#8226;</option>
							<option name="heart" value="&#9829;"> &#9829;</option>
							<option name="right arrow" value="&#8250;"> &#8250;</option>
							<option name="up arrow" value="&#8657;"> &#8657;</option>
							<option name="diamond" value="&#9830;"> &#9830;</option>
							<option name="club" value="&#9827;"> &#9827;</option>
							<option name="spade" value="&#9824;"> &#9824;</option>
							<option name="diamond outline" value="&#9674;"> &#9674;</option>
						</select>
						<input type="text" value={props.text} onChange={props.triggerShapeChange} />
					</label>
					<label>
					Background:
						<button onClick={props.randomBackgroundColor} style={{backgroundColor: props.backgroundColor, color: props.color}} value={props.backgroundColor}> Random Color </button>
					{props.default ? (
						<button className="blackout" onClick={props.blackOut} style={{color: "#fff", backgroundColor: "#000"}}> 
							Blackout 
						</button>
						)
					: (
						<button className="default" onClick={props.blackOut} style={{color: "#000", backgroundColor: "#fff"}}> 
							Default 
						</button>
					)}
					</label>

				</form>

			</aside>
		</React.Fragment>
	);
}


export default StyleBar;