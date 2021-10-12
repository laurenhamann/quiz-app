import React from 'react';
function Results(props) {
	return (	
		<section className="results">
			<h1> You got {props.score} questions correct! </h1>
			<h3>Answers as follows</h3>
			<ul>
				<li>
					1. TRUE: Michigan is larger than Great Britian
				</li>
				<li>
					2. TRUE: The five rings on the Olympic flag are interlocking
				</li>
				<li>
					3. FALSE: Sydney is not the capital of Australia
				</li>
				<li>
					4.  TRUE: 50 Cent and Charlie Chaplin were alive at the same time. Chaplin died when 50 Cent was only 2 and a half years old. 
				</li>
				<li>
					5. FALSE: There are not 14 bones in a human foot, there are 28 bones in a human foot. 
				</li>
				<li>
					6. TRUE: The population of California is larger than the entire population of Canada
				</li>
				<li>
					7.  TRUE: More people are killed each year by cows than by sharks.
				</li>
				<li>
					8. TRUE:  There are 2,691 stars on the Hollywood Walk of Fame as of 2020
				</li>
				<li>
					9. FALSE: The Great Wall of China is not visible from space
				</li>
				<li>
					10. TRUE: Donald Duck’s middle name is Fauntelroy
				</li>
				<li>
					11. TRUE: Stephen Hawking declined a knighthood from the Queen
				</li>
				<li>
					12.  FALSE: A woman has not walked on the moon
				</li>
				<li>
					13.  TRUE: You can add the two numbers on the opposite sides of dice together, and the answer is always 7
				</li>
				<li>
					14.  FALSE: The moon is not 50 percent of the mass of Earth, it is only 1%. 
				</li>
				<li>
					15.  FALSE: You can not sneeze during sleep
				</li>
				<li>
					16.  TRUE: Nearly three percent of the ice in Antarctic glaciers is penguin urine
				</li>
				<li>
					17.  FALSE: A snail can sleep for up to 3 years
				</li>
				<li>
					18.  TRUE: It takes a sloth two weeks to digest its food
				</li>
				<li>
					19.  TRUE: The first tea bags were made of silk
				</li>
				<li>
					20.  TRUE: Camels have three sets of eyelashes
				</li>
			</ul>
		</section>
	);
}

export default Results;