import React from 'react';
import Choices from './Answers';

class Questions extends React.Component {
	render() {
		const choice = this.props.answers.map((a, index) => 
			<Choices
				choices={a.choice}
				correct={a.correct}
				onclick={this.props.choiceClick} 
			/>
		);
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