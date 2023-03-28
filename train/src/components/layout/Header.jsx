import React from 'react';

function Header() {
	console.log('go');
	return (
		<nav>
			<div className='nav-wrapper teal'>
				<a
					href='!#'
					className='brand-logo'>
					React Movies
				</a>
			</div>
		</nav>
	);
}

export default Header;
