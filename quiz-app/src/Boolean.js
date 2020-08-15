import React from 'react';

function Boolean(props) {
	return (
		<React.Fragment>
			<button onClick={(event) => {props.score(event, 1, props.index)}} className="boolean"> True </button>
			<button onClick={(event) => {props.score(event, 0, props.index)}} className="boolean"> False </button>
		</React.Fragment>
	);
}
export default Boolean;