import React from 'react';



function TopBar(props){
	const headerHeight = window.innerHeight * 0.1;
		return(
			<header className={window.innerWidth > 700 ? "lgRow" : "TopBar"} style={{height: headerHeight + 'px'}}> 
			
			
				<h1 className="title" style={props.default ? {color: "#000000"} : {color: "#ffffff"}}> Dot Game </h1>
				<div className={window.innerWidth > 700 ? "lgButtons" : "Buttons"}>
					<button onClick={props.triggerUndo} disabled={props.disabledUndo}className="undo">Undo</button>
					<button onClick={props.triggerRedo} disabled={props.disabledRedo} className="redo"> Redo </button>
					<button onClick={props.resetAll}> Reset </button>
				</div>
				
				
			</header>
			);

}

export default TopBar;