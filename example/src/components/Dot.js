import React from 'react';

const Dot = (props) => (
		<p 
		   	onClick={props.selectDotFunction ? props.selectDot : ''} 
		   	id={props.id}	 
		   	className={props.className ? 'blink-animation' : 'dot'}
		   	style={{position: "absolute", left: props.left + "px", top: props.top + 'px', display: "inlineBlock", fontSize: props.font + 'px', color: props.color}}
		   	dangerouslySetInnerHTML={{__html: props.shape }}> 
		</p>

	);

export default Dot;