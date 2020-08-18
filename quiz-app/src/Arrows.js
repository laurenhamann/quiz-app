import React from 'react';

function Arrows(props) {
	return (
		<aside style={{display: props.display}}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
			  <defs>
			    <marker id="startarrow" markerWidth="10" markerHeight="7" 
			    refX="10" refY="3.5" orient="auto" onClick={props.onClick}>
			      <polygon points="10 0, 10 7, 0 3.5" fill="none" stroke="none" strokeWidth="1" />
			    </marker>
			    <marker id="endarrow" markerWidth="10" markerHeight="7" 
			    refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth" onClick={props.onClick}>
			        <polygon points="0 0, 10 3.5, 0 7" fill="none" stroke="none" strokeWidth="1" />
			    </marker>
			  </defs>
			  <line x1="100" y1="50" x2="250" y2="50" stroke="none" strokeWidth="8" 
			  markerEnd="url(#endarrow)" markerStart="url(#startarrow)" />
			</svg>

			<div onClick={props.onClick} id="up"> </div>
			<div id="line"></div>
			<div onClick={props.onClick} id="down"> </div>

		</aside>

	);
}

export default Arrows;