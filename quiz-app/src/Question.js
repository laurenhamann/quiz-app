import React from 'react';
import Boolean from './Boolean';
import ScaleToFive from './ScaleToFive';
import ScaleDisagreeToAgree from './ScaleDisagreeToAgree';

class Questions extends React.Component {
	render() {
		const type = this.props.type === "boolean" ? <Boolean score={this.props.score} index={this.props.index} /> : this.props.type === "scaleToFive" ? <ScaleToFive score={this.props.score} index={this.props.index} /> : <ScaleDisagreeToAgree score={this.props.score} index={this.props.index}/>;
		return(
			<div className="question-div">
				<section className="question">
					<h2>{this.props.question}</h2>
				</section>
				<section className="answers">
					{type}
				</section>
			</div>

		)
	}
}

export default Questions;