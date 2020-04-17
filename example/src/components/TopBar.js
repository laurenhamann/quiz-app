import React from 'react';



function TopBar(props){
	const headerHeight = window.innerHeight * 0.1;
		return(
			<header className={window.innerWidth > 700 ? "lgRow" : "TopBar"} style={{height: headerHeight + 'px'}}> 
			
			
				<h1 className="title" style={props.default ? {color: "#000000"} : {color: "#ffffff"}}> Dot Game </h1>
				<div className={window.innerWidth > 700 ? "lgButtons" : "Buttons"}>
					<button onClick={props.triggerUndo} disabled={props.disabledUndo}className={props.disabledUndo ? "undo button" : "undoAbled undo button"}>Undo</button>
					<button onClick={props.triggerRedo} disabled={props.disabledRedo} className={props.disabledRedo ? "redo button" : "redoAbled redo button"}> Redo </button>
					<button onClick={props.resetAll} className="reset button"> Reset </button>
					<button onClick={props.triggerColorUndo} className={props.colorUndo ? "undoColorVisable" : "undoColorNotVisable undo button"}>Undo Color</button>
					<button onClick={props.triggerColorRedo} className={props.colorRedo ? "undoColorVisable" : "undoColorNotVisable undo button"}>Redo Color</button>					
				</div>
				
				
			</header>
			);

}

export default TopBar;