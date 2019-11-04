import React from 'react';

const Sidebar = (props) => {
	const { deSelect } = props;
	return (
		<div id="sidebar">
			<img src="juke.svg" id="logo" />
			<section>
				<h4>
					<a onClick={() => deSelect()}>ALBUMS</a>
				</h4>
			</section>
		</div>
	);
};

export default Sidebar;
