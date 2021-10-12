import React from 'react';
import Button from './Button';
function Header(props){
	return (	
		<header>
		<h1> Do you know your General Trivia? </h1>
		<Button className="start-button" onClick={props.onClick} title= "Start Quiz" />
		</header>


	);
}

export default Header;