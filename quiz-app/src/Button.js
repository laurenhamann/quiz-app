import React from 'react';


function Button(props) {
	return (
		<section className="button-container">
			<button className="button" onClick={props.onClick}> {props.title} </button>
		</section>
	);
}

export default Button;