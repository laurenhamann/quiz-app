import React from 'react';
import StyleBar from './StyleBar';
import TopBar from './TopBar';

class Header extends React.Component{


	render() {
		return (
				<div className="Header">
					<StyleBar />
					<TopBar />
				</div>
			);
	}

}

export default Header;