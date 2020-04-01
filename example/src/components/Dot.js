import React from 'react';

const Dot = (props) => (
		<p  
		   id={props.id}	 
		   className={props.className ? 'blink-animation' : 'dot'}
		   style={{zIndex: "-1", position: "absolute", left: props.left + "px", top: props.top + 'px', display: "inlineBlock", fontSize: "24px"}}
		   dangerouslySetInnerHTML={{__html: "&#8226;" }}> 
		</p>

	);

export default Dot;