import React from 'react';

function ScaleToFive(props) {
	return (
		<React.Fragment>
			<button onClick={(event) => {props.score(event, 0, props.index)}} className="scale-round"> Never </button>
			<button onClick={(event) => {props.score(event, 0, props.index)}} className="scale-round"> Sometimes </button>
			<button onClick={(event) => {props.score(event, 1, props.index)}} className="scale-round"> Often </button>
			<button onClick={(event) => {props.score(event, 2, props.index)}} className="scale-round"> Constantly </button>
		</React.Fragment>
	);
}
export default ScaleToFive;