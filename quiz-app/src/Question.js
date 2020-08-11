import React from 'react';
import Choices from './Answers';

class Questions extends React.Component {
	render() {
		const choice = this.props.answers.forEach( a => {
			return <Choices
						choices={a.choice}
						correct={a.correct} 
					/>
		});
		return(
			<div className="question-div">
				<section className="question">
					<h2>{this.props.question}</h2>
				</section>
				<section className="answers">
					{choice}
				</section>
			</div>

		)
	}
}

export default Questions;