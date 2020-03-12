import React from 'react';
import StyleBar from './StyleBar';



function TopBar(props){
	const headerHeight = window.innerHeight * 0.1;
	const windowWidth = window.innerWidth;
		return(
			<header className={window.innerWidth > 700 ? "lgRow" : "TopBar"} style={{height: headerHeight + 'px'}}> 
			
			
				<h1 className="title"> Dot Game </h1>
				<div className={window.innerWidth > 700 ? "lgButtons" : "Buttons"}>
					<button className="undo">Undo</button>
					<button className="redo"> Redo </button>
				</div>
				
				
			</header>
			);

}

export default TopBar;