import React from 'react';

const BreakPointDisplay = (props) => (
	<div style={{position: "absolute", left: props.leftButton + 'px', top: window.innerHeight * 0.4}}>
		<h1 style={{textAlign: "center", marginTop: "0"}}> Dot Game </h1>
		<p style={{textAlign: "center"}}> This demo can only be used on a desktop </p>
		<h2 style={{textAlign: "center", fontSize: '12px'}}><a href="https://github.com/LaurenwallerDesigns/dot-game.git"> Check Out My Code </a></h2>

	</div>
);

export default BreakPointDisplay;