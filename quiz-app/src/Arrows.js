import React from 'react';
const left = "<";
const right = ">";
function Arrows(props) {
	return (
		<aside>
			<button disabled={!props.disabled} onClick={props.onClick} id="left" className="hide">{left}</button>
		</aside>
	);
}

export default Arrows;