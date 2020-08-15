import React from 'react';

function ScaleDisagreeToAgree(props) {
	return (
		<React.Fragment>
			<button onClick={(event) => {props.score(event, 0, props.index)}} className="scale-round"> Completely Disagree </button>
			<button onClick={(event) => {props.score(event, 0, props.index)}} className="scale-round"> Somewhat Disagree </button>
			<button onClick={(event) => {props.score(event, 0, props.index)}} className="scale-round"> Neutral </button>
			<button onClick={(event) => {props.score(event, 1, props.index)}} className="scale-round"> Somewhat Agree </button>
			<button onClick={(event) => {props.score(event, 2, props.index)}} className="scale-round"> Completely Agree </button>
		</React.Fragment>
	);
}
export default ScaleDisagreeToAgree;