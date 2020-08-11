import React from 'react';

function Choices(props) {
	console.log(props.choices);
	return (
		<p className="choice"> {props.choices} </p>
	);
}
export default Choices;