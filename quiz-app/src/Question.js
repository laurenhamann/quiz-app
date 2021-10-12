import React from 'react';
import Boolean from './Boolean';


function Questions(props) {
	return(
		<div className="question-div">
			<section className="question">
				<h2>{props.question}</h2>
			</section>
			<section className="answers">
				<Boolean score={props.score} index={props.index} answer={props.answer} />
			</section>
		</div>
	)
}

export default Questions;