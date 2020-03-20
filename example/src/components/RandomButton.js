import React from 'react';


const RandomButton = (props) => {
	return 	(
		<button className="randomColor" onClick={props.handleRandomColor} style={{backgroundColor: props.color}} value={props.color}> Random Color </button>
		);
}


export default RandomButton;


