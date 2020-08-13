import React from 'react';

function Choices(props) {
	console.log(props.choices);
	return (
		<button onClick={(event) => {props.onclick(event, props.correct)}} className="choice"> {props.choices} </button>
	);
}
export default Choices;