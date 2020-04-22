import React from 'react';



function TopBar(props){
	console.log(window.innerWidth);
		return(
				<div className={window.innerWidth > 700 ? "TbButtonsLarge" : "TbButtonsSmall"}>
					<button onClick={props.triggerUndo} disabled={props.disabledUndo}className={props.disabledUndo ? "undo button" : "btnAbled undo button"}>Undo</button>
					<button onClick={props.triggerRedo} disabled={props.disabledRedo} className={props.disabledRedo ? "redo button" : "btnAbled redo button"}> Redo </button>
					<button onClick={props.resetAll} className={"reset button btnAbled"}> Reset </button>
					<button onClick={props.triggerColorUndo} disabled={!props.colorUndo} className={!props.colorUndo ? "undo button" : "btnAbled undo button"}>Undo Color</button>
					<button onClick={props.triggerColorRedo} disabled={!props.colorRedo} className={!props.colorRedo ? "undo button" : "btnAbled undo button"}>Redo Color</button>					
				</div>
				
				
			);

}

export default TopBar;