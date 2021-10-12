import React from 'react';
function Boolean(props) {
	return (
		<React.Fragment>
			<button id="true" onClick={(event) => {
				props.score(event, props.answer, event.target.innerHTML)}} className="boolean true">True</button>
			<button id="false" onClick={(event) => {
				props.score(event, props.answer, event.target.innerHTML)
			}} className="boolean false">False</button>
		</React.Fragment>
	);
}
export default Boolean;