import React from 'react';



function TopBar(props){
	const headerHeight = window.innerHeight * 0.1;
	const left = window.innerWidth * 0.5;
		return(
			<header className={window.innerWidth > 700 ? "lgRow" : "TopBar"} style={{height: headerHeight + 'px'}}> 
			
			
				<h1 className="title" style={props.default ? {color: "#000000", position: 'absolute', left: left + 'px'} : {color: "#ffffff", position: 'absolute', left: left + 'px' }}> Dot Game </h1>
				<div className={window.innerWidth > 700 ? "lgButtons" : "Buttons"}>
					<button onClick={props.triggerUndo} disabled={props.disabledUndo}className={props.disabledUndo ? "undo button" : "undoAbled undo button"}>Undo</button>
					<button onClick={props.triggerRedo} disabled={props.disabledRedo} className={props.disabledRedo ? "redo button" : "redoAbled redo button"}> Redo </button>
					<button onClick={props.resetAll} className="reset button"> Reset </button>
					<button onClick={props.triggerColorUndo} disabled={!props.colorUndo} className={"undoColorVisable button undo"}>Undo Color</button>
					<button onClick={props.triggerColorRedo} disabled={!props.colorRedo} className={"undoColorVisable button undo"}>Redo Color</button>					
				</div>
				
				
			</header>
			);

}

export default TopBar;