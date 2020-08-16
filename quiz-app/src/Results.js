import React from 'react';

function Results(props) {
	return (	
		<div className="results">
			<h1> {props.subtitle} </h1>
			<p> {props.description} </p>
		</div>
	);
}

export default Results;